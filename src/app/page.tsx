export default function Home() {
  const baseUrl = "https://yessports.com/api/v1";
  const sportsJSON = {
    sport: {
      id: "2",
      name: "Cricket",
      description:
        "Cricket is a bat-and-ball game played between two teams of eleven players each on a cricket field. It is one of the most popular sports in the world, particularly in countries like India, Australia, England, and Pakistan.",
      rules:
        "Cricket involves two phases: batting and bowling/fielding. The batting team tries to score runs by hitting the ball while the bowling team tries to dismiss the batsmen and restrict runs.",
      history:
        "Cricket originated in England in the late 16th century and has since become widely popular, especially in former British colonies and beyond. It is known for its rich history and traditions.",
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
    },
  };
  const teamJSON = {
    team: "India",
    teamNum: 2,
    playersList: [
      { name: "Virat Kohli", number: "1413" },
      { name: "Rohit Sharma", number: "576" },
      { name: "Shikhar Dhawan", number: "1446" },
      { name: "Shubman Gill", number: "11808" },
      { name: "Shreyas Iyer", number: "9428" },
      { name: "Manish Pandey", number: "1836" },
      { name: "Mayank Agarwal", number: "2195" },
      { name: "Prithvi Shaw", number: "12094" },
      { name: "Cheteshwar Pujara", number: "1448" },
      { name: "Ajinkya Rahane", number: "1447" },
      { name: "Ruturaj Gaikwad", number: "11813" },
      { name: "Hardik Pandya", number: "9647" },
      { name: "Hanuma Vihari", number: "8424" },
      { name: "Ravindra Jadeja", number: "587" },
      { name: "Ravichandran Ashwin", number: "1593" },
      { name: "KL Rahul", number: "8733" },
      { name: "Sanju Samson", number: "8271" },
      { name: "Wriddhiman Saha", number: "1465" },
      { name: "Rishabh Pant", number: "10744" },
      { name: "Mohammed Shami", number: "7909" },
      { name: "Jasprit Bumrah", number: "9311" },
      { name: "Kuldeep Yadav", number: "8292" },
      { name: "Yuzvendra Chahal", number: "7910" },
      { name: "Navdeep Saini", number: "9715" },
      { name: "Shardul Thakur", number: "8683" },
      { name: "Umesh Yadav", number: "1858" },
      { name: "Mohammed Siraj", number: "10808" },
    ],
  };
  const playerJSON = {
    playerName: "Virat Kohli",
    nationalTeam: "India",
    profilePicUrl:
      "https://static.cricbuzz.com/a/img/v1/152x152/i1/c332891/virat-kohli.jpg",
    personalInfo: {
      born: "Nov 05, 1988 (35 years)",
      birthplace: "Delhi",
      height: "5 ft 9 in (175 cm)",
      role: "Batsman",
      battingStyle: "Right Handed Bat",
      bowlingStyle: "Right-arm medium",
    },
    description:
      "A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian, 'bad-boy' intensity, would clearly be an outcast.Kohli's thirst for runs showed no signs of slowing down as he looted a small matter of 973 runs during the 2016 edition of the Indian Premier League, the most (by far) by any batsman in the history of the tournament However, it isn't beyond Kohli to prove his critics wrong yet again, as he continues to take criticism on his stride, setting new standards for modern batsmanship.Alas, all this didn't translate into a title triumph - one that has kept Kohli and Bangalore waiting so far (As of March 2023).",
    teams:
      "India, Delhi, India Red, India U19, Royal Challengers Bengaluru, Board Presidents XI, North Zone, Indians, India A, Asia XI",
    iccRankings: {
      batting: {
        Test: "9",
        ODI: "3",
        T20: "48",
      },
      bowling: {
        Test: "--",
        ODI: "3",
        T20: "48",
      },
    },
  };

  return (
    <main className="flex flex-col sm:ml-52  md:ml-56">
      <section id="introduction" className="sm:px-12 sm:py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          Introduction
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Welcome to the Sports Statistics API Documentation! This API is
          designed to provide free and accessible sports data to hobbyists,
          students, and anyone who cannot afford paid sports APIs. Whether you
          are building a sports application, working on a school project, or
          learning to handle APIs in your frontend projects, this API offers a
          comprehensive and easy-to-use interface for accessing up-to-date
          sports information.
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Overview
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Sports Statistics API allows developers to retrieve information
          about different sports, teams, and players. The data is scraped from
          the Cricbuzz website and includes both historical and real-time data.
          While the current focus is on cricket, the API will soon be expanded
          to include other sports such as football, kabaddi, and basketball.
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Key Benefits:
        </h4>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <span className="font-semibold">Free and Accessible: </span>
              Designed for hobbyists and students who need access to sports data
              without the costs associated with paid APIs.
            </p>
          </li>
          <li>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <span className="font-semibold">Real-Time Data: </span>
              Provides real-time updates directly from the source, ensuring the
              information is current and accurate.
            </p>
          </li>
          <li>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <span className="font-semibold">Comprehensive Coverage: </span>
              Access detailed information about sports, teams, and players,
              including hard-to-find statistics for sports like kabaddi.
            </p>
          </li>
          <li>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <span className="font-semibold">Historical Data: </span>
              Offers both current and historical data, making it useful for a
              wide range of applications.
            </p>
          </li>
        </ul>
      </section>
      <section id="authentication" className="border-t sm:px-12 sm:py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          Authentication
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="font-semibold">
            This API does not require any form of authentication.
          </span>{" "}
          You can start making requests immediately without needing API keys,
          tokens, or any other credentials. This approach simplifies the process
          and allows you to focus on integrating the data into your
          applications.
        </p>
      </section>
      <section id="endpoints" className="border-t sm:px-12 sm:py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          Endpoints
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This API does not require any form of authentication. The Sports
          Statistics API provides several endpoints to access detailed
          information about sports, teams, and players. Below is a detailed
          explanation of each endpoint, including the structure, parameters, and
          example responses.
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Base URL
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          All API requests are made to the following base URL:
        </p>
      </section>
    </main>
  );
}
