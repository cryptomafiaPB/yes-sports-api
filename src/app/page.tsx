import {
  baseUrl,
  errorResponce1,
  errorResponce2,
  exampleReqPlayer,
  exampleReqSports,
  exampleReqTeam,
  formattedSportsData,
  playerJSON,
  teamJSON,
} from "@/lib/schema";
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
        <p className="mt-28 font-mono leading-6">
          <span className="font-sans font-bold">Note</span> : All the data
          belongs to cricbuzz.com and they have the right to take legal actions
          against use of their data. Please do not use it for commercial
          purposes. This project is only for educational purposes.
        </p>
        <Link href={"/"} className="flex justify-center items-center mt-14">
          Copyright@2024
        </Link>
      </section>
    </main>
  );
}
