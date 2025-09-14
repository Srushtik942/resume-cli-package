#!/usr/bin/env node

import chalk from "chalk";
// Your resume content
const resume = `
${chalk.bold.cyan("Srushti Kulkarni")}
Backend Developer | React Enthusiast | Node.js | MongoDB

${chalk.bold("Experience")}
- Frontend Developer @FilmyFunds  Built React dynamic components & inetegrated APIS, Payment Gateway as well.
- Worked on Node.js backend and React frontend

${chalk.bold("Skills")}
Node.js | React.js | MongoDB | AWS (learning) |Git Hub | Express.Js | PostreSql | ShadCn | Tailwind Css

${chalk.bold("Projects")}
- ShutterTale: Photo management system
- MovieHunt: Movie project management
- Doc Management System
- Swiggy Clone
- Meet Up App Clone
- Dev-Tinder

${chalk.bold("Contact")}
LinkedIn: https://linkedin.com/in/srushtikulkarni78
GitHub: https://github.com/Srushtik942
Twitter: https://x.com/srushtikul
`;

console.log(resume);
