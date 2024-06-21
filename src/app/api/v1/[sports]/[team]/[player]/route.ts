import axios from 'axios';
import cheerio from 'cheerio';

interface PlayerInfo {
    playerName: string;
    nationalTeam: string;
    profilePicUrl: string | undefined;
    personalInfo: {
        born: string;
        birthplace: string;
        height: string;
        role: string;
        battingStyle: string;
        bowlingStyle: string;
    };
    description: string;
    teams: string;
    iccRankings: {
        batting: {
            Test: string;
            ODI: string;
            T20: string;
        },
        bowling: {
            Test: string;
            ODI: string;
            T20: string;
        },
    }
}


export const GET = async (req: Request, { params }: any) => {
    try {
        const url = `https://www.cricbuzz.com/profiles/${params.player}`

        const response = await axios.get(url);
        const html = response.data;

        // Load HTML content into Cheerio
        const $ = cheerio.load(html);


        const playerInfo: PlayerInfo = {
            playerName: $('.cb-font-40').text().trim(),
            nationalTeam: $('.cb-font-18').text().trim(),
            profilePicUrl: $('img[title="profile image"]').attr('src')?.trim(), // Use optional chaining
            personalInfo: {
                born: $('.cb-col.cb-col-40.text-bold.cb-lst-itm-sm:contains("Born")').next().text().trim(),
                birthplace: $('.cb-col.cb-col-40.text-bold.cb-lst-itm-sm:contains("Birth Place")').next().text().trim(),
                height: $('.cb-col.cb-col-40.text-bold:contains("Height")').next().text().trim(),
                role: $('.cb-col.cb-col-40.text-bold.cb-lst-itm-sm:contains("Role")').next().text().trim(),
                battingStyle: $('.cb-col.cb-col-40.text-bold.cb-lst-itm-sm:contains("Batting Style")').next().text().trim(),
                bowlingStyle: $('.cb-col.cb-col-40.text-bold.cb-lst-itm-sm:contains("Bowling Style")').next().text().trim(),
            },
            description: $('.cb-col.cb-col-100.cb-player-bio').text().trim(),
            teams: $('.cb-col.cb-col-40.text-bold.cb-lst-itm-sm:contains("Teams")').next().text().trim(),
            iccRankings: {
                batting: {
                    Test: $('.cb-col.cb-col-25.text-left.cb-plyr-rank.text-bold:contains("Batting")').next().text().trim(),
                    ODI: $('.cb-col.cb-col-25.text-left.cb-plyr-rank.text-bold:contains("Batting")').next().next().text().trim(),
                    T20: $('.cb-col.cb-col-25.text-left.cb-plyr-rank.text-bold:contains("Batting")').next().next().next().text().trim(),
                },
                bowling: {
                    Test: $('.cb-col.cb-col-25.text-left.cb-plyr-rank.text-bold:contains("Bowling")').next().text().trim(),
                    ODI: $('.cb-col.cb-col-25.text-left.cb-plyr-rank.text-bold:contains("Batting")').next().next().text().trim(),
                    T20: $('.cb-col.cb-col-25.text-left.cb-plyr-rank.text-bold:contains("Batting")').next().next().next().text().trim(),

                }
            }

        };

        return new Response(JSON.stringify(playerInfo), { status: 200 })


    } catch (error) {
        return new Response("Server Error", { status: 500 })
    }
}