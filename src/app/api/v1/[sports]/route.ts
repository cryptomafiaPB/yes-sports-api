// api/[sports]/route.ts

interface Sport {
    id: string;
    name: string;
    description: string;
    rules: string;
    history: string;
    teams?: string[]; // Optional array of team names
}


export const GET = async (req: Request, { params }: any) => {
    try {


        // Assuming sample data for different sports
        let sportData = {};

        // Sample data based on the sport parameter
        switch (params.sports) {
            case 'football':
                sportData = {
                    sport: {
                        id: '1',
                        name: 'Football',
                        "description": "Football is a team sport played between two teams of eleven players each. It is widely considered the world's most popular sport, with over 4 billion fans.",
                        "rules": "Basic rules of football include scoring by getting the ball into the opposing team's goal, using any part of the body except the hands and arms (except for the goalkeepers). Fouls can result in penalties or free kicks.",
                        "history": "The modern form of football originated in England in the mid-19th century. It quickly spread worldwide through British influence, becoming a global phenomenon.",
                        "teams": []
                        // Add more fields as needed
                    }
                };
                break;
            case 'cricket':
                sportData = {
                    sport: {
                        id: '2',
                        name: 'Cricket',
                        description: "Cricket is a bat-and-ball game played between two teams of eleven players each on a cricket field. It is one of the most popular sports in the world, particularly in countries like India, Australia, England, and Pakistan.",
                        rules: "Cricket involves two phases: batting and bowling/fielding. The batting team tries to score runs by hitting the ball while the bowling team tries to dismiss the batsmen and restrict runs.",
                        history: "Cricket originated in England in the late 16th century and has since become widely popular, especially in former British colonies and beyond. It is known for its rich history and traditions.",
                        teams: [
                            "India",
                            "Afghanistan",
                            "Ireland",
                            "Pakistan",
                            "Australia",
                            "Sri Lanka",
                            "Bangladesh",
                            "England",
                            "West Indies",
                            "South Africa",
                            "Zimbabwe",
                            "New Zealand",
                        ],
                        // Add more fields as needed
                    }
                };
                break;
            case 'basketball':
                sportData = {
                    sport: {
                        id: '3',
                        name: 'Basketball',
                        description: 'Basketball is a team sport in which two teams, most commonly of five players each...',
                        rules: 'Basic rules of basketball...',
                        history: 'Brief history of basketball...',
                        // Add more fields as needed
                    }
                };
                break;
            case 'kabaddi':
                sportData = {
                    sport: {
                        id: '4',
                        name: 'Kabaddi',
                        "description": "Kabaddi is a contact team sport that originated in ancient India. It is played between two teams of seven players each, where the objective is for a single player to tag opponents and return to their half of the court without being tackled.",
                        rules: "In kabaddi, a player (raider) enters the opponent's half to tag as many defenders as possible while chanting 'kabaddi'. Defenders must try to stop the raider from returning to their half.",
                        history: "Kabaddi has deep roots in Indian culture, dating back thousands of years. It has gained international recognition, particularly in South Asia and has variations like beach kabaddi and circle style kabaddi.",
                        teams: []
                        // Add more fields as needed
                    }
                };
                break;
            default:
                sportData = {
                    error: 'Sport not found',
                };
                break;
        }

        return new Response(JSON.stringify(sportData), { status: 200 })
    } catch (err) {

        return new Response("Funny Server Error", { status: 500 })
    }
}


