# Codedigger Frontend

[![Codedigger][codedigger-shield]][codedigger]
[![Codedigger API][codedigger-api-shield]][api]

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![Apache License][license-shield]][license-url]
[![Contributor Covenant][code-of-conduct-shield]][code-of-conduct-url]

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Discord][discord-shield]][discord-url]

## Table of Contents

1.  [Introduction](#introduction)

2.  [Getting Started](#getting-started)

    1.  [Fork, clone locally and create a branch](#fork-clone-locally--create-a-branch)
    2.  [Setting Environment First Time](#setting-environment-first-time)
    3.  [Starting Development Server](#starting-development-server-on-windowslinux)
    4.  [Using Docker](#using-docker)

3.  [Code of Conduct](#code-of-conduct)

4.  [Contributing](#contributing)

5.  [License](#license)

6.  [How to Get Help](#how-to-get-help)

## Introduction

This is the main Frontend Repository of the [Codedigger] Website.

Codedigger aims at accumulating the data of competitive programming platforms ([Codeforces], [Codechef], [Atcoder], [SPOJ] and [UVA Online Judge]) into one platform. We used their publicly available APIs and introduced several unique features into our application such as friends, mentors, ladders, upsolve, problem and contest filter. This can be the ultimate stop for everyone practicing competitive programming.

User can practice topicwise list to expertise any topic, levelwise list to practice based on rating and difficulty, or can create their own list and follow that. They can filter problems based on difficulty, tag, or solved by mentor from all the sites combined at one place.

Upsolving means to solve those problems, you're not able to solve during the contest. With the help of codedigger, you will be able to upsolve codeforces, codechef, and atcoder contests in an easy and better way.

## Getting Started

### Fork, clone locally & create a branch

Fork [Codedigger Frontend](https://help.github.com/articles/fork-a-repo) repository and clone at your local

```sh
git clone https://github.com/<yourGithubUsername>/Frontend.git
cd Frontend/
```

Create a branch with a descriptive name. A good branch name would be :

```sh
git checkout -b feature/AmazingFeature
```

```sh
git checkout -b bugfix/user
```

### Setting Environment First Time

#### **Windows**

Follow these [steps](https://www.liquidweb.com/kb/install-react-js-windows/) to set your virtual environment for Windows.

#### **Linux**

Follow these [steps](https://www.tecmint.com/install-reactjs-on-ubuntu/) to set your virtual environment for Linux.

### Starting Development Server on Windows/Linux

```sh
npm install && npm start
```

```sh
Navigate to localhost:3000/ to open the website.
```

### Using Docker

For those familiar with Docker, you can also build and run the project through a container.

#### **Development build**

Building and running a static container:

```sh
docker build . -t frontend:dev
docker run -p 3000:3000 frontend:dev
```

To build and run a container with live-reload for development, use docker compose instead:

```sh
docker-compose up -d
```

#### **Production Build**

```sh
docker build . -f Dockerfile.prod -t frontend:prod
docker run -p 80:80 frontend:prod
```

## Code of Conduct

This project and everyone participating in it is governed by the [Codedigger Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to contact.codedigger@gmail.com.

## Contributing

We encourage you to participate in this open source project. We love Pull Requests, Bug Reports, ideas, (security) code reviews or any other kind of positive contribution. Please review [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to file an issue or pr.

<!-- LICENSE -->

## License

Copyright 2021 Codedigger

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<!-- CONTACT -->

## How to Get Help

Email us - contact.codedigger@gmail.com

[Join][discord-url]! our Discord Community

**[Back to top](#table-of-contents)**

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Code-dig-ger/Frontend.svg?style=for-the-badge
[contributors-url]: https://github.com/Code-dig-ger/Frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Code-dig-ger/Frontend.svg?style=for-the-badge
[forks-url]: https://github.com/Code-dig-ger/Frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/Code-dig-ger/Frontend.svg?style=for-the-badge
[stars-url]: https://github.com/Code-dig-ger/Frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Code-dig-ger/Frontend.svg?style=for-the-badge
[issues-url]: https://github.com/Code-dig-ger/Frontend/issues
[license-shield]: https://img.shields.io/github/license/Code-dig-ger/Frontend.svg?style=for-the-badge
[license-url]: https://github.com/Code-dig-ger/Frontend/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/codedigger
[code-of-conduct-shield]: https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg?style=for-the-badge
[code-of-conduct-url]: CODE_OF_CONDUCT.md
[discord-shield]: https://img.shields.io/badge/-Discord-555?style=for-the-badge&logo=discord&logoColor=white
[discord-url]: https://discord.gg/4ZeNgUn7cF
[api]: https://143.110.253.225/
[codedigger]: https://codedigger.tech
[codeforces]: https://codeforces.com/
[codechef]: https://www.codechef.com/
[atcoder]: https://atcoder.jp/
[spoj]: https://www.spoj.com/
[uva online judge]: https://onlinejudge.org/
[codedigger-shield]: https://img.shields.io/badge/-Codedigger-555?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAuFJREFUOE+t1G1IE3EcB/DvFEPnmDrN5sPKxKGixgqns5n0oiezMl8EQSgESW8SqiFBRdCLMEhCKyopyNIsDErrRdmDmrFUlKInsGTMBW63ebc5t91s3ba43c5tmCHkwb24O/jc9////f4/AVb4Eqywh6VBoTANwoRqMIwStD2jsOUcflM2o/3zxNjcwGgvTZLGv4VZDIpEqShQNyFeVAuSiAFlAigC6lf3ECWIgtdFg3HSzMy74fv6ru5TsLjM4XAkKMstxo4Dz+Cck4I0YeG2BkEAjMsNr8sNxkXDQ9rMuuvt1e7JqVEeDYGrM+U4cnYUDlsSSCKEsbCVQPnrDgh8vgjQS9PwWO123dVbKo+RmmDREHiydQjixC1cKgLsUqPsFmSW50OiyEVCgRw+N5sslJAFvU4ajh/6EUNb52YAfg7MV1bg2IW3oWQEoh0z2NRQhST5WvgYJrDEwP6FgwvvaEzdfrht/uf0Gw48pGmGepcmHFyvkkG+pyTweTHIw9xP2D219GtbqcHh4xx4ovkp5Iq9bDX5QhQfVkOSLf0HyEE8aPvw5TnR07ebAzUtvcgp2sclNAKUGcV1pZDkpC8TpDH78esL05O+Sg6sbWyGulITahUC6zZKkVtTtmzQ0v/+GjU43MCBhaqtaGgaWEhIEoiaNUNRvx0phdlL7GFoyWzB9Hce7PylN77k20aA021axIvLAicj2IcCqxlShQzJRdmQKDfA7/EEqxxZFMfk1LjhZgdbwWDbsCnTs/JQf34EDmtCeHH4bVA9uoIYYWywffh+pOGx2R261vYyD0F8i2xs9ikrX4Wqul447akBKJCWu0u7LmOVOJ4DnW4w7CmhbKThRud+x3eddvHR498IU9JQUnEJIvFBkKZoHla2X0RsciI7GFjUS2nHu013Hze6KWp66eEQ/iUuToakNTXw+pWg5zLyzhz1w+czOT9NjJFDYz3zJpNheePrPyfuik/sP0+iITNZPL3cAAAAAElFTkSuQmCC
[codedigger-api-shield]: https://img.shields.io/badge/Codedigger-API-yellowgreen?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAuFJREFUOE+t1G1IE3EcB/DvFEPnmDrN5sPKxKGixgqns5n0oiezMl8EQSgESW8SqiFBRdCLMEhCKyopyNIsDErrRdmDmrFUlKInsGTMBW63ebc5t91s3ba43c5tmCHkwb24O/jc9////f4/AVb4Eqywh6VBoTANwoRqMIwStD2jsOUcflM2o/3zxNjcwGgvTZLGv4VZDIpEqShQNyFeVAuSiAFlAigC6lf3ECWIgtdFg3HSzMy74fv6ru5TsLjM4XAkKMstxo4Dz+Cck4I0YeG2BkEAjMsNr8sNxkXDQ9rMuuvt1e7JqVEeDYGrM+U4cnYUDlsSSCKEsbCVQPnrDgh8vgjQS9PwWO123dVbKo+RmmDREHiydQjixC1cKgLsUqPsFmSW50OiyEVCgRw+N5sslJAFvU4ajh/6EUNb52YAfg7MV1bg2IW3oWQEoh0z2NRQhST5WvgYJrDEwP6FgwvvaEzdfrht/uf0Gw48pGmGepcmHFyvkkG+pyTweTHIw9xP2D219GtbqcHh4xx4ovkp5Iq9bDX5QhQfVkOSLf0HyEE8aPvw5TnR07ebAzUtvcgp2sclNAKUGcV1pZDkpC8TpDH78esL05O+Sg6sbWyGulITahUC6zZKkVtTtmzQ0v/+GjU43MCBhaqtaGgaWEhIEoiaNUNRvx0phdlL7GFoyWzB9Hce7PylN77k20aA021axIvLAicj2IcCqxlShQzJRdmQKDfA7/EEqxxZFMfk1LjhZgdbwWDbsCnTs/JQf34EDmtCeHH4bVA9uoIYYWywffh+pOGx2R261vYyD0F8i2xs9ikrX4Wqul447akBKJCWu0u7LmOVOJ4DnW4w7CmhbKThRud+x3eddvHR498IU9JQUnEJIvFBkKZoHla2X0RsciI7GFjUS2nHu013Hze6KWp66eEQ/iUuToakNTXw+pWg5zLyzhz1w+czOT9NjJFDYz3zJpNheePrPyfuik/sP0+iITNZPL3cAAAAAElFTkSuQmCC
