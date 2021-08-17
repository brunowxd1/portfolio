import styled from "styled-components";

import bg1 from "../../assets/bg1.jpg";

export const Container = styled.body`
  min-height: 100vh;
  position: relative;
`;

export const FrontSection = styled.section`
  background-color: #001f54;
  background-image: linear-gradient(
      128deg,
      rgba(0, 212, 255, 0.009138689655549759) 0%,
      rgba(18, 130, 162, 0.3) 250%
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%230a1128'/%3E%3Cstop offset='1' stop-color='%23001f54'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%2305183e'/%3E%3Cstop offset='1' stop-color='%23001f54'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.59' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;

  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  min-height: 110vh;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  box-shadow: 0 4px 2px -2px #fff, 0 6px 2px -2px #1282a2;

  z-index: 100;
`;

export const Main = styled.main`
  background: linear-gradient(rgba(10, 17, 40, 0.9), rgba(10, 17, 40, 0.9)),
    url(${bg1}) no-repeat center;
  background-size: cover;
  width: 100%;
  min-height: 150vh;
  max-height: fit-content;
  position: absolute;
  top: 75vh;
  padding-top: 50vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutMe = styled.section`
  .aboutme--box {
    display: flex;
    position: relative;
    height: fit-content;
    width: 60vw;
  }

  .aboutme--images {
    width: fit-content;
    img {
      border-radius: 50%;
      box-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 9px #fff, 0 0 12px #fff,
        0 0 15px #1282a2, 0 0 18px #1282a2, 0 0 21px #1282a2, 0 0 24px #1282a2;
      width: 250px;
      position: absolute;
    }
  }

  .aboutme--image1 {
    z-index: 30;
    transition: all 0.4s linear;
    background: var(--primary);
    position: additive-symbols;
    filter: brightness(0.8);
  }

  .aboutme--image1-hover {
    box-shadow: 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff,
      0 0 60px #1282a2, 0 0 70px #1282a2, 0 0 80px #1282a2, 0 0 90px #1282a2 !important;
    filter: brightness(1);
    transform: scale(1.1);
  }

  .aboutme--image2 {
    mix-blend-mode: screen;
    z-index: 20;
    top: 7.81rem;
    transition: all 0.4s linear;
    filter: brightness(0.8);
  }

  .aboutme--image3 {
    filter: grayscale(90%);
    opacity: 0.3;
    z-index: 10;
    top: 15.62rem;
    transition: all 0.4s linear;
  }

  .aboutme--hovering {
    top: 0;
    transition: all 0.4s linear;
  }

  .aboutme--text {
    margin-left: 25rem;

    p {
      color: var(--white);
      font-size: 1.25rem;
      line-height: 2.5rem;

      span {
        color: var(--white);
        text-shadow: 0 0 1px #1282a2, 0 0 2px #1282a2, 0 0 3px #1282a2,
          0 0 4px #1282a2, 0 0 5px #1282a2, 0 0 6px #1282a2, 0 0 7px #1282a2,
          0 0 8px #1282a2;
      }
    }
  }
`;

export const SkillsSection = styled.section`
  margin-top: 12rem;

  .skill--grid {
    display: grid;
    grid-template-columns: repeat(3, 350px);
    grid-column-gap: 4rem;
  }

  .skill--card {
    height: 424px;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0.75rem;

    svg {
      color: rgba(254, 252, 251, 0.8);
      filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 6px #1282a2)
        drop-shadow(0 0 10px #1282a2) drop-shadow(0 0 12px #1282a2);
    }

    h3 {
      margin: 1rem 0;
      font-size: 1.62rem;
      font-weight: 400;
      color: var(--white);
      text-shadow: 0 0 7px #1282a2, 0 0 10px #1282a2, 0 0 21px #1282a2,
        0 0 42px #1282a2, 0 0 82px #1282a2, 0 0 92px #1282a2, 0 0 102px #1282a2,
        0 0 151px #1282a2;
    }

    span {
      color: white;
      font-size: 20px;
      padding: 0.37rem 0;
    }

    &-1 {
      animation: flickerBorder 4s infinite alternate;
    }

    &-2 {
      animation: flickerBorder 3.8s infinite alternate;
    }

    &-3 {
      animation: flickerBorder 4.2s infinite alternate;
    }
  }
`;

export const ProjectSection = styled.section`
  width: 98.9vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 15%;
  border-bottom-left-radius: 15%;
  box-shadow: 0 -2px 0px 0px #fff, 0 -4px 0px 0px #1282a2, 0 2px 0px 0px #fff,
    0 4px 0px 0px #1282a2;
  min-height: 100vh;

  margin-top: 12rem;

  background-color: #0a1128;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3CradialGradient id='a' cx='800' cy='371' r='70%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%230a1128'/%3E%3Cstop offset='1' stop-color='%23001f54'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='800' cy='371' r='60%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23034078' stop-opacity='1'/%3E%3Cstop offset='1' stop-color='%23034078' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1600' height='900'/%3E%3Cg fill='none' stroke='%230a1128' stroke-width='10' stroke-miterlimit='10' stroke-opacity='0.45'%3E%3Cpolygon points='2277.4 1152 800-1407-677.4 1152'/%3E%3Cpolygon points='800-1372.9-648.8 1136.5 2248.8 1136.5'/%3E%3Cpolygon points='800-1338.8-620.2 1121.1 2220.2 1121.1'/%3E%3Cpolygon points='800-1304.7-591.6 1105.6 2191.6 1105.6'/%3E%3Cpolygon points='800-1270.6-563 1090.2 2163 1090.2'/%3E%3Cpolygon points='800-1236.5-534.4 1074.7 2134.4 1074.7'/%3E%3Cpolygon points='800-1202.4-505.8 1059.3 2105.8 1059.3'/%3E%3Cpolygon points='800-1168.3-477.2 1043.8 2077.2 1043.8'/%3E%3Cpolygon points='800-1134.2-448.6 1028.4 2048.6 1028.4'/%3E%3Cpolygon points='800-1100.1-420 1012.9 2020 1012.9'/%3E%3Cpolygon points='800-1066-391.4 997.5 1991.4 997.5'/%3E%3Cpolygon points='800-1031.9-362.7 982 1962.7 982'/%3E%3Cpolygon points='800-997.8-334.1 966.6 1934.1 966.6'/%3E%3Cpolygon points='800-963.7-305.5 951.1 1905.5 951.1'/%3E%3Cpolygon points='800-929.6-276.9 935.7 1876.9 935.7'/%3E%3Cpolygon points='800-895.5-248.3 920.2 1848.3 920.2'/%3E%3Cpolygon points='800-861.4-219.7 904.7 1819.7 904.7'/%3E%3Cpolygon points='800-827.3-191.1 889.3 1791.1 889.3'/%3E%3Cpolygon points='800-793.2-162.5 873.8 1762.5 873.8'/%3E%3Cpolygon points='800-759.1-133.9 858.4 1733.9 858.4'/%3E%3Cpolygon points='800-725-105.3 842.9 1705.3 842.9'/%3E%3Cpolygon points='800-690.9-76.7 827.5 1676.7 827.5'/%3E%3Cpolygon points='800-656.8-48.1 812 1648.1 812'/%3E%3Cpolygon points='800-622.7-19.4 796.6 1619.4 796.6'/%3E%3Cpolygon points='800-588.6 9.2 781.1 1590.8 781.1'/%3E%3Cpolygon points='800-554.5 37.8 765.7 1562.2 765.7'/%3E%3Cpolygon points='800-520.5 66.4 750.2 1533.6 750.2'/%3E%3Cpolygon points='800-486.4 95 734.8 1505 734.8'/%3E%3Cpolygon points='800-452.3 123.6 719.3 1476.4 719.3'/%3E%3Cpolygon points='800-418.2 152.2 703.9 1447.8 703.9'/%3E%3Cpolygon points='800-384.1 180.8 688.4 1419.2 688.4'/%3E%3Cpolygon points='800-350 209.4 673 1390.6 673'/%3E%3Cpolygon points='800-315.9 238 657.5 1362 657.5'/%3E%3Cpolygon points='800-281.8 266.6 642 1333.4 642'/%3E%3Cpolygon points='800-247.7 295.2 626.6 1304.8 626.6'/%3E%3Cpolygon points='800-213.6 323.9 611.1 1276.1 611.1'/%3E%3Cpolygon points='800-179.5 352.5 595.7 1247.5 595.7'/%3E%3Cpolygon points='800-145.4 381.1 580.2 1218.9 580.2'/%3E%3Cpolygon points='800-111.3 409.7 564.8 1190.3 564.8'/%3E%3Cpolygon points='800-77.2 438.3 549.3 1161.7 549.3'/%3E%3Cpolygon points='800-43.1 466.9 533.9 1133.1 533.9'/%3E%3Cpolygon points='800-9 495.5 518.4 1104.5 518.4'/%3E%3Cpolygon points='800 25.1 524.1 503 1075.9 503'/%3E%3Cpolygon points='800 59.2 552.7 487.5 1047.3 487.5'/%3E%3Cpolygon points='800 93.3 581.3 472.1 1018.7 472.1'/%3E%3Cpolygon points='800 127.4 609.9 456.6 990.1 456.6'/%3E%3Cpolygon points='800 161.5 638.5 441.2 961.5 441.2'/%3E%3Cpolygon points='800 195.6 667.2 425.7 932.8 425.7'/%3E%3Cpolygon points='800 229.7 695.8 410.2 904.2 410.2'/%3E%3Cpolygon points='800 263.8 724.4 394.8 875.6 394.8'/%3E%3Cpolygon points='800 297.9 753 379.3 847 379.3'/%3E%3Cpolygon points='800 332 781.6 363.9 818.4 363.9'/%3E%3C/g%3E%3Crect fill-opacity='0.45' fill='url(%23b)' width='1600' height='900'/%3E%3C/svg%3E");
  background-size: cover;

  padding: 4rem 0;

  .inverted {
    flex-direction: row-reverse;
  }

  .center {
    width: 40%;
    margin-top: 7.5rem !important;
  }
`;

export const Project = styled.div`
  width: 80vw;
  display: flex;

  &:not(:first-of-type) {
    margin-top: 15.62rem;
  }

  .carousel--box {
    overflow: visible !important;
    width: fit-content;
  }

  .carousel--div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    width: 700px;
    min-height: 397.33px;
    padding: 1rem;
    border-radius: 1.25rem;
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
      0 0 5px #1282a2, 0 0 6px #1282a2, 0 0 7px #1282a2, 0 0 8px #1282a2;
  }

  .carousel--div-full {
    width: 700px;
    box-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff,
      0 0 5px #1282a2, 0 0 6px #1282a2, 0 0 7px #1282a2, 0 0 8px #1282a2;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .project--text {
    margin-left: 4rem;

    h3 {
      color: #fff;
      margin: 0 auto;
      text-shadow: 0 0 7px #1282a2, 0 0 10px #1282a2, 0 0 21px #1282a2,
        0 0 42px #1282a2, 0 0 82px #1282a2, 0 0 92px #1282a2, 0 0 102px #1282a2,
        0 0 151px #1282a2;
      font-size: 26px;
      text-align: center;
      margin-bottom: 24px;

      &::after {
        content: "";
        position: relative;
        display: block;
        height: 0.5rem;
        width: 100%;
        margin: 0 auto;
        box-shadow: 0 4px 2px -2px #fff, 0 6px 2px -2px #1282a2;
        z-index: 20;
      }
    }

    p {
      color: #fff;
      line-height: 2rem;
      letter-spacing: 0.5px;
    }
  }

  .inverted {
    margin-left: 0;
    margin-right: 4rem;
  }

  .center-text {
    margin-left: 0;
    h3::after {
      width: 80%;
    }

    p {
      text-align: center;
    }
  }
`;