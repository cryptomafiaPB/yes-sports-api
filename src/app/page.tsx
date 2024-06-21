import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const baseUrl = "https://yessports.vercel.app/api/v1";
  const exampleReqSports =
    'curl -X GET "https://yessports.vercel.app/api/v1/cricket"';
  const exampleReqTeam =
    'curl -X GET "https://yessports.vercel.app/api/v1/cricket/India"';
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

  const formattedSportsData = JSON.stringify(sportsJSON, null, 2);

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
  const exampleReqPlayer =
    'curl -X GET "https://yessports.vercel.app/api/v1/cricket/India/1413"';

  const errorResponce1 = {
    error: "Resource not found",
  };
  const errorResponce2 = {
    error: "Server error",
  };

  return (
    <main className="flex flex-col mx-8  sm:ml-52  md:ml-56">
      <section id="introduction" className="sm:px-12 pt-28 pb-12">
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
          Github Repo 🔗
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-2">
          👨🏼‍💻 Feel free to contribute and give it ⭐
        </p>
        <Link
          href={"https://github.com/cryptomafiaPB/yes-sports-api"}
          target="_blank"
          className="leading-7 [&:not(:first-child)]:mt-6 text-blue-700 hover:text-blue-500 transition-all"
        >
          https://github.com/cryptomafiaPB/yes-sports-api
        </Link>
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
      <section id="authentication" className="border-t sm:px-12 py-16">
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
      <section id="endpoints" className="border-t sm:px-12 py-16">
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
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto">
          <code className={`text-sm font-mono`}>{baseUrl}</code>
        </pre>
      </section>
      <section id="sports" className="border-t sm:px-12 py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          1. Sports endpoint
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="font-semibold">Endpoint:</span>
          `/[sports]`
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
          This endpoint returns detailed information about a specific sport,
          including a description, rules, history, and a list of teams.
        </p>
        <span className="font-semibold border-b pb-2">Parameters:</span>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
          `[<span className="font-semibold">sports</span>]`: The sports name
          (only accepts `<span className="font-semibold">cricket</span>`, `
          <span className="font-semibold">football</span>`, `
          <span className="font-semibold">kabaddi</span>`, `
          <span className="font-semibold">basketball</span>`).
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Example Request:
        </h4>

        <pre className="rounded bg-gray-800 text-white p-3 my-4 mb-6 overflow-auto">
          <code className={`text-sm font-mono`}>{exampleReqSports}</code>
        </pre>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Example Responce:
        </h4>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto">
          <code className={`text-sm font-mono `}>{formattedSportsData}</code>
        </pre>
      </section>
      <section id="teams" className="border-t sm:px-12 py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          2. Teams endpoint
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="font-semibold">Endpoint:</span>
          `/[sports]/[team]`
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
          This endpoint returns the list of players for a specific team within a
          given sport.
        </p>
        <span className="font-semibold border-b pb-2">Parameters:</span>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          `[<span className="font-semibold">sports</span>]`: The sports name
          (only accepts `<span className="font-semibold">cricket</span>`, `
          <span className="font-semibold">football</span>`, `
          <span className="font-semibold">kabaddi</span>`, `
          <span className="font-semibold">basketball</span>`).
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
          `[<span className="font-semibold border-r pb-2">team</span>]`: The
          team name (case-sensitive, first letter of each word capitalized).
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Example Request:
        </h4>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 mb-6 overflow-auto">
          <code className={`text-sm font-mono`}>{exampleReqTeam}</code>
        </pre>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Example Responce:
        </h4>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto max-h-[500px]">
          <code className={`text-sm font-mono`}>
            {JSON.stringify(teamJSON, null, 2)}
          </code>
        </pre>
      </section>
      <section id="players" className="border-t sm:px-12 py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          3. Player Details endpoint
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="font-semibold">Endpoint:</span>
          `/[sports]/[team]/[playerNumber]`
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
          This endpoint returns detailed information about a specific player,
          including personal info, statistics, and profile picture URL.
        </p>
        <span className="font-semibold border-b pb-2">Parameters:</span>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          `[<span className="font-semibold">sports</span>]`: The sports name
          (only accepts `<span className="font-semibold">cricket</span>`, `
          <span className="font-semibold">football</span>`, `
          <span className="font-semibold">kabaddi</span>`, `
          <span className="font-semibold">basketball</span>`).
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          `[<span className="font-semibold ">team</span>]`: The team name
          (case-sensitive, first letter of each word capitalized).
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
          `[<span className="font-semibold">playerNumber</span>]`: The unique
          number associated with the player
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Example Request:
        </h4>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 mb-6 overflow-auto">
          <code className={`text-sm font-mono`}>{exampleReqPlayer}</code>
        </pre>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Example Responce:
        </h4>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto max-h-[500px]">
          <code className={`text-sm font-mono`}>
            {JSON.stringify(playerJSON, null, 2)}
          </code>
        </pre>
      </section>
      <section id="errorhandling" className="border-t sm:px-12 py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          Error Handling
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          When using the Sports Statistics API, you may encounter various
          errors. Properly handling these errors in your application is crucial
          for providing a smooth user experience. This section outlines the
          common errors you may encounter and how to handle them.
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Common Errors
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="font-semibold ">Resource Not Found (200): </span>
          This error occurs when the requested resource does not exist. It could
          be due to an incorrect sport name, team name, or player number.
        </p>
        <h2 className="font-semibold mt-6">Example error Responce: </h2>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto max-h-[500px]">
          <code className={`text-sm font-mono`}>
            {JSON.stringify(errorResponce1, null, 2)}
          </code>
        </pre>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="font-semibold ">Server error (500): </span>
          This error indicates that there is a problem with the server. It could
          be due to various reasons such as server overload, unexpected
          conditions, or other issues.
        </p>
        <h2 className="font-semibold mt-6">Example error Responce: </h2>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto max-h-[500px]">
          <code className={`text-sm font-mono`}>
            {JSON.stringify(errorResponce2, null, 2)}
          </code>
        </pre>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Handling Errors
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          To handle these errors effectively, your application should check for
          these specific status codes and display appropriate messages to the
          user.
        </p>
        <h2 className="font-semibold mt-6">
          Example of Handling Errors in JavaScript:
        </h2>
        <pre className="rounded bg-gray-800 text-white p-3 my-4 overflow-auto max-h-[500px]">
          <code className={`text-sm font-mono`}>JavaScript Code</code>
        </pre>
      </section>
      <section id="contact" className="border-t sm:px-12 py-16">
        <h1 className="mb-6 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 hover:text-slate-600 hover:underline transition-all">
          Contact
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We would love to hear from you! Whether you have questions, feedback,
          or need support, feel free to reach out to us. Here’s how you can get
          in touch:
        </p>
        <h4 className="mt-14 flex items-center gap-2 border-b pb-2 scroll-m-20 text-xl font-semibold tracking-tight">
          Email <Mail />
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          For any inquiries, support, or collaboration opportunities, please
          email us at:
          <br />
          <br />
          <span className="text-blue-600 font-mono text-base">
            📧 john853043@gmail.com
          </span>
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 flex items-center gap-2 text-xl font-semibold tracking-tight">
          Github <Github />
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          If you encounter any issues, have feature requests, or want to
          contribute to the project, please use the GitHub repository:
          <br />
          <br />
          <span className="font-semibold">🔗 [GitHub Repository URL]</span>
          <br />
          <span className="font-medium pl-8"> Issues</span>: Report bugs or
          request features via the GitHub Issues page.
          <br />
          <span className="font-medium ml-8"> Pull Requests</span>: Feel free to
          fork the repository, make your changes, and submit a pull request.
          Check out our Contributing Guide for more details.
        </p>
        <h4 className="mt-14 border-b pb-2 scroll-m-20 flex items-center gap-2 text-xl font-semibold tracking-tight">
          Social media
        </h4>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          Stay updated with the latest news, updates, and discussions:
          <br />
          <br />
          <div className="flex items-center gap-2">
            <span className="font-semibold flex items-center gap-2">
              Twitter <TwitterLogoIcon className="w-6 h-6" />:
            </span>
            <Link href={"https://x.com/Pranavbagal9"}>@Pranavbagal9</Link>
          </div>
          <br />
          <div className="flex items-center gap-2">
            <span className="font-semibold flex items-center gap-2">
              Linkdein <LinkedInLogoIcon className="h-6 w-6" />:
            </span>
            <Link href={"www.linkedin.com/in/pranav-bagal-64075b166"}>
              @pranav-bagal-64075b166
            </Link>
          </div>
        </div>
        <Link href={"/"} className="flex justify-center items-center mt-24">
          Copyright@2024
        </Link>
      </section>
    </main>
  );
}
