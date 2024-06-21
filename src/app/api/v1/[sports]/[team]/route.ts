// api/[sports]/[team]/route.ts

import axios from 'axios';
import cheerio from 'cheerio';

export const GET = async (req: Request, { params }: any) => {
    try {
        const team = params.team
        // Define teamNum based on params.team
        let teamNum: number | null = null;

        // Mapping of team names to teamNum
        const teamNumMap: Record<string, number> = {
            India: 2,
            Afghanistan: 96,
            Ireland: 27,
            Pakistan: 3,
            Australia: 4,
            'Sri Lanka': 5,
            Bangladesh: 6,
            England: 9,
            'West Indies': 10,
            'South Africa': 11,
            Zimbabwe: 12,
            'New Zealand': 13,
        };

        // Set teamNum based on params.team
        if (team && teamNumMap.hasOwnProperty(team)) {
            teamNum = teamNumMap[team];
        }

        // Example URL: cricbuzz.com / cricket - team / teamName / @/players
        const url = `https://www.cricbuzz.com/cricket-team/${params.team}/${teamNum}/players`;

        // Fetch HTML content using Axios
        const response = await axios.get(url);
        const html = response.data;

        // Load HTML content into Cheerio
        const $ = cheerio.load(html);

        // Extract player names using Cheerio selectors
        const playerList: { name: string; number: string }[] = [];

        $('a.cb-col.cb-col-50').each((index, element) => {
            // Assuming class "cb-font-16 text-hvr-underline" contains player names
            const playerName = $(element).find('.cb-font-16.text-hvr-underline').text().trim();
            const playerUrl = $(element).attr('href');
            const playerNumber = playerUrl ? playerUrl.split('/profiles/')[1].split('/')[0] : ''; // Extract number after "/profiles/"

            playerList.push({ name: playerName, number: playerNumber });
        });

        // Return JSON response with player list
        return new Response(JSON.stringify({ team: team, teamNum: teamNum, playersList: playerList }), { status: 200 })

    } catch (error) {
        return new Response("Funny Server Error", { status: 500 })
    }
}