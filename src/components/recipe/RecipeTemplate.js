import React from 'react';
import styled from 'styled-components';
import {
  RiUser6Line,
  RiTimerLine,
  RiHeartLine,
  RiLeafLine,
  RiBarChartBoxLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import { color, media, size } from '../../styles';
import Instructions from './Instructions';
import PriceBreakdown from './PriceBreakdown';
import Equipments from './Equipments';

const StyledTemplate = styled.div`
  color: ${color.gray[9]};
  display: flex;
  flex-direction: column;
  ${media.lg`flex-direction: row;`}
  ${media.lg`flex-wrap: wrap;`}
  h1 {
    font-size: ${size.font.lg};
    font-weight: bold;
  }
  .mainImage {
    margin-top: 8px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    height: 240px;
    ${media.lg`width: calc(50% - 8px);`}
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .numeralInfo {
    ${media.lg`width: calc(50% - 8px);`}
    ${media.lg`margin-left: 16px;`}
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    .info {
      display: flex;
      align-items: center;
      margin-top: 8px;
      padding: 8px;
      border-radius: 10px;
      box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
      width: calc(calc(100vw - 48px) / 2);
      ${media.lg`width: calc(50% - 8px);`}
      &:nth-child(even) {
        margin-left: 16px;
      }
      svg {
        font-size: 40px;
        color: #f6f8fc;
        filter: drop-shadow(2px 2px 1px #d8dade) drop-shadow(-2px -2px 1px #ffffff);
      }
      .data {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 8px;
        color: ${color.gray[7]};
        .numero {
          font-size: ${size.font.md};
        }
        .unit {
          font-size: ${size.font.sm};
        }
      }
    }
  }
  .specialtyIcons {
    margin-top: 16px;
    display: flex;
    ${media.lg`width:100%;`}
    .specialty {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      ${media.lg`border-radius: 20px;`}
      padding: 8px;
      background: linear-gradient(45deg, #ffffff, #f6f8fc);
      box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
      width: calc(calc(100vw - 80px) / 4);
      height: calc(calc(100vw - 80px) / 4);
      ${media.lg`width: calc(calc(100% - 48px) / 4);`}
      ${media.lg`height: 80px;`}
      svg {
        width: 32px;
      }
      span {
        width: 80%;
        text-align: center;
        margin-top: 4px;
        font-size: ${size.font.xs};
        font-weight: bold;
        color: ${color.gray[8]};
      }
      & + .specialty {
        margin-left: 16px;
      }
    }
  }
  .dishType {
    margin-top: 16px;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    ${media.lg`width: 100%;`}
  }
  .ingredientSection {
    margin-top: 16px;
    color: ${color.gray[9]};
    ${media.lg`width: calc(50% - 8px);`}
    .header {
      font-size: ${size.font.md};
      font-weight: bold;
    }
    .ingredients {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      .ingredient {
        & + .ingredient {
          margin-left: 16px;
        }
        &:nth-child(4n + 1) {
          margin-left: 0;
        }
        width: calc(calc(100vw - 80px) / 4);
        ${media.lg`width: calc(calc(100% - 48px) / 4);`}
        margin-top: 8px;
        .image {
          height: calc(calc(100vw - 80px) / 4);
          ${media.lg`height: 80px;`}
          ${media.xl`height: calc(calc(872px - 112px) / 8);`}
          background: #fff;
          box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
          border-radius: 10px;
          overflow: hidden;
          padding: 8px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .name {
          margin-top: 6px;
          font-size: ${size.font.xs};
          font-weight: bold;
          text-align: center;
        }
        .metric {
          margin-top: 2px;
          font-size: ${size.font.xs};
          text-align: center;
        }
        
      }
    }
  }

  .summary {
    margin-top: 16px;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    font-size: ${size.font.sm};
  }
`;

const RecipeTemplate = ({ detail, equip, pb, inst }) => {
  if (detail && equip && pb && inst)
    return (
      <StyledTemplate>
        <h1>{detail.title}</h1>
        <div className="mainImage">
          <img src={detail.image} />
        </div>
        <div className="numeralInfo">
          <div className="info">
            <RiUser6Line />
            <div className="data">
              <div className="numero">{detail.servings}</div>
              <div className="unit">Servings</div>
            </div>
          </div>
          <div className="info">
            <RiMoneyDollarCircleLine />
            <div className="data">
              <div className="numero">{detail.pricePerServing}</div>
              <div className="unit">per Serving</div>
            </div>
          </div>
          <div className="info">
            <RiTimerLine />
            <div className="data">
              <div className="numero">{detail.readyInMinutes}</div>
              <div className="unit">Minutes</div>
            </div>
          </div>
          <div className="info">
            <RiHeartLine />
            <div className="data">
              <div className="numero">{detail.aggregateLikes}</div>
              <div className="unit">Likes</div>
            </div>
          </div>
          <div className="info">
            <RiLeafLine />
            <div className="data">
              <div className="numero">{detail.healthScore}</div>
              <div className="unit">HealthScore</div>
            </div>
          </div>
          <div className="info">
            <RiBarChartBoxLine />
            <div className="data">
              <div className="numero">{detail.spoonacularScore}</div>
              <div className="unit">SpoonScore</div>
            </div>
          </div>
        </div>
        <div className="creditText">{detail.creditText}</div>
        <div className="specialtyIcons">
          {detail.dairyFree && (
            <div className="specialty">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g data-name="Dairy Product">
                  <path d="M208 72H48V16A16 16 0 0164 0h128a16 16 0 0116 16z" fill="#e2dbd5" />
                  <path d="M208.167 56H144v456h112.333V144z" fill="#d4ccc7" />
                  <path d="M144 56h64.167v456H144z" fill="#c6bab3" />
                  <path
                    d="M169.6 128l-9.6 16v368H16a16 16 0 01-16-16V144a32.956 32.956 0 0128.259-16z"
                    fill="#e2dbd5"
                  />
                  <rect fill="#ffead2" height="80" rx="8" width="112" x="304" />
                  <path d="M408 0h-24a88.011 88.011 0 01-51.3 80H408a8 8 0 008-8V8a8 8 0 00-8-8z" fill="#faddc3" />
                  <path d="M304 24h112v16H304z" fill="#f5d3b8" />
                  <path
                    d="M440 512H280a8 8 0 01-8-8V200a88.428 88.428 0 0134.54-69.9C322.887 117.594 288 105.284 288 86.833A22.859 22.859 0 01310.833 64h98.334A22.859 22.859 0 01432 86.833c0 10.149-11.067 19.4-11.067 19.4-8.859 7.418-15.391 17.806-7.473 23.863A88.428 88.428 0 01448 200v304a8 8 0 01-8 8z"
                    fill="#f09b73"
                  />
                  <path
                    d="M272 311.394V504a8 8 0 008 8h160a8 8 0 008-8V200a87.086 87.086 0 00-1.051-13.424A208.119 208.119 0 01272 311.394z"
                    fill="#e58b6c"
                  />
                  <path d="M160 144H0l48-88h160z" fill="#efebe8" />
                  <path
                    d="M280 512c54.5 0 124.472-11.3 157.577-43.217a7.884 7.884 0 001.889-8.536l-65.54-168.742a8.019 8.019 0 00-9.552-4.806c-22.076 5.918-25.806-22.324-11.487-29.463a7.9 7.9 0 003.871-9.934l-13.292-34.221A8 8 0 00336 208h-56z"
                    fill="#eed60f"
                  />
                  <path
                    d="M280 512a145.412 145.412 0 01-101.577-40.926 8 8 0 01-1.889-8.611l9.784-25.41a8 8 0 016.984-5.111c11.908-.718 19.9-17.064 10.327-26.922a8 8 0 01-1.726-8.447l25.85-67.138a8.072 8.072 0 0111.771-3.868c19.987 12.755 33.973-25.583 11.316-29.31a8.085 8.085 0 01-6.167-10.769l27.861-72.363A8 8 0 01280 208a8 8 0 017.466 5.125l96 249.338a8 8 0 01-1.889 8.611A145.412 145.412 0 01280 512z"
                    fill="#f8e868"
                  />
                  <path
                    d="M383.466 462.463l-41.412-107.558a200.121 200.121 0 01-163.56 116.236 146.517 146.517 0 00203.083-.067 8 8 0 001.889-8.611z"
                    fill="#f6e23d"
                  />
                  <circle cx="312" cy="432" fill="#f8e868" r="24" />
                  <circle cx="288" cy="376" fill="#f6e23d" r="24" />
                  <circle cx="248" cy="448" fill="#f8e868" r="24" />
                  <g fill="#eed60f">
                    <path d="M304 448a24 24 0 0130.966-22.966 24 24 0 10-29.932 29.932A23.932 23.932 0 01304 448zM280 392a24 24 0 0130.966-22.966 24 24 0 10-29.932 29.932A23.932 23.932 0 01280 392zM240 464a24 24 0 0130.966-22.966 24 24 0 10-29.932 29.932A23.932 23.932 0 01240 464z" />
                  </g>
                  <circle cx="280" cy="280" fill="#fcf5be" r="16" />
                  <circle cx="296" cy="312" fill="#fcf5be" r="8" />
                  <path
                    d="M336.033 328l16 176.724A8 8 0 00360 512h112a8 8 0 007.967-7.276l16-176.724z"
                    fill="#81c784"
                  />
                  <circle cx="356" cy="148" fill="#f2bba5" r="20" />
                  <circle cx="388" cy="180" fill="#f2bba5" r="12" />
                  <circle cx="64" cy="96" fill="#fff" r="16" />
                  <circle cx="88" cy="120" fill="#fff" r="8" />
                  <circle cx="376" cy="368" fill="#c8e6c9" r="16" />
                  <circle cx="400" cy="392" fill="#c8e6c9" r="8" />
                  <path d="M0 496a16 16 0 0016 16h144v-80C132.4 495.156 0 496 0 496z" fill="#d4ccc7" />
                  <path d="M0 208h160v224H0z" fill="#ea6049" />
                  <path d="M0 372.288V432h160V241.692A216.326 216.326 0 010 372.288z" fill="#de513e" />
                  <path d="M32 336c0-23.491 40-80 48-80s48 55.383 48 80c0 57.418-96 65.9-96 0z" fill="#fff" />
                  <path
                    d="M36.09 357.189C54.4 399.027 128 386.274 128 336c0-5.617-2.087-12.839-5.4-20.636-13.267 32.691-51.368 52.063-86.51 41.825z"
                    fill="#efebe8"
                  />
                  <path d="M504 336H328a8 8 0 010-16h176a8 8 0 010 16z" fill="#49ad4d" />
                  <path
                    d="M348 460.142l4.036 44.582A8 8 0 00360 512h112a8 8 0 007.967-7.276l12.354-136.453A172 172 0 01348 460.142z"
                    fill="#66bb6a"
                  />
                </g>
              </svg>
              <span>DAIRY FREE</span>
            </div>
          )}
          {/**특이사항아이콘 필요 */}
          {detail.glutenFree && (
            <div className="specialty">
              <svg viewBox="0 0 511.896 511.896" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M430.207 178.426c-26.713-26.713-70.024-26.713-96.737 0l-20.729 20.729 56.046 56.046c26.713 26.713 70.024 26.713 96.737 0l20.729-20.729z"
                  fill="#ffc239"
                />
                <path
                  d="M333.47 81.689l-56.046-56.046-20.729 20.729c-26.713 26.713-26.713 70.024 0 96.737l56.046 56.046 20.729-20.729c26.713-26.713 26.713-70.024 0-96.737z"
                  fill="#ffe04a"
                />
                <path
                  d="M320.1 288.533c-26.713-26.713-70.024-26.713-96.737 0l-20.729 20.729 56.046 56.046c26.713 26.713 70.024 26.713 96.737 0l20.729-20.729z"
                  fill="#ffc239"
                />
                <path
                  d="M223.363 191.796l-56.046-56.046-20.729 20.729c-26.713 26.713-26.713 70.024 0 96.737l56.046 56.046 20.729-20.729c26.713-26.713 26.713-70.024 0-96.737z"
                  fill="#ffe04a"
                />
                <path
                  d="M209.994 398.64c-26.713-26.713-70.024-26.713-96.737 0l-20.729 20.729 56.046 56.046c26.713 26.713 70.024 26.713 96.737 0l20.729-20.729z"
                  fill="#ffc239"
                />
                <path
                  d="M113.256 301.902L57.21 245.856l-20.729 20.729c-26.713 26.713-26.713 70.024 0 96.737l56.046 56.046 20.729-20.729c26.714-26.713 26.714-70.023 0-96.737zM458.728 127.028h-73.864l.007-73.857C384.864 23.805 408.672-.003 438.038.004h73.85l.007 73.857c.001 29.359-23.808 53.167-53.167 53.167z"
                  fill="#ffe04a"
                />
                <path
                  d="M458.728 127.028h-73.864L511.889.004l.007 73.857c0 29.359-23.809 53.167-53.168 53.167z"
                  fill="#ffc239"
                />
                <path d="M-.024 490.64l385.796-385.796 21.21 21.21L21.186 511.85z" fill="#f8bd2d" />
                <path d="M10.58 501.247L396.376 115.45l10.605 10.605L21.185 511.852z" fill="#fd9d28" />
              </svg>
              <span>GLUTEN FREE</span>
            </div>
          )}
          {detail.ketogenic && (
            <div className="specialty">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14.999h2v24.999H7z" fill="#815643" />
                <path d="M28 51c0 7.18-4.477 11-10 11S8 58.18 8 51s4.477-13 10-13 10 5.82 10 13z" fill="#d5cec2" />
                <path
                  d="M21.684 38.922C20.543 38.334 19.302 38 18 38c-5.523 0-10 5.82-10 13 0 4.344 1.645 7.449 4.164 9.232C18.225 57.335 22.423 51.166 22.423 44c0-1.765-.266-3.466-.739-5.078z"
                  fill="#e7e4dd"
                />
                <path
                  d="M13.803 61.151c-3.356.141-6.754-1.577-9.293-5.57-3.852-6.059-3.197-13.372 1.463-16.336 2.461-1.565 5.546-1.604 8.477-.4l-.001-.001C10.68 40.705 8 45.446 8 51c0 5.228 2.374 8.675 5.797 10.163z"
                  fill="#cbc3b6"
                />
                <path
                  d="M55 25.412V12c0-5.523-4.477-10-10-10S35 6.477 35 12v13.411c0 3.253-1.158 6.384-3.209 8.909-2.682 3.302-4.151 7.625-3.716 12.304.772 8.29 7.685 14.911 16 15.352C53.884 62.495 62 54.695 62 45c0-4.085-1.447-7.827-3.852-10.754A13.91 13.91 0 0155 25.412z"
                  fill="#78b75b"
                />
                <path
                  d="M50.423 25c0-8.677-3.459-16.541-9.066-22.305C37.638 4.152 35 7.764 35 12v13.411c0 3.253-1.158 6.384-3.209 8.909-2.682 3.302-4.151 7.625-3.716 12.304.268 2.882 1.292 5.553 2.845 7.842C42.383 49.598 50.423 38.238 50.423 25z"
                  fill="#96cc7f"
                />
                <circle cx="45" cy="45" fill="#c16b3f" r="9" />
                <path
                  d="M48.241 36.611A8.97 8.97 0 0045 36a9 9 0 00-9 9 8.95 8.95 0 001.836 5.432 32.076 32.076 0 0010.405-13.821z"
                  fill="#e39854"
                />
                <path
                  d="M31.116 35.213a14.028 14.028 0 00-3.704-6.659l-9.483-9.483c-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0l3.563 3.563-.001-.001A9.982 9.982 0 0035 12v13.411c0 3.253-1.158 6.384-3.209 8.909a17.25 17.25 0 00-.677.891z"
                  fill="#78b75b"
                />
                <circle cx="18" cy="52" fill="#f2c351" r="6" />
                <path d="M51.999 44.998h-2a5.005 5.005 0 00-5-4.999v-2c3.86 0 7 3.14 7 6.999z" fill="#fadfb2" />
                <path
                  d="M52.999 11.998h-2A6.006 6.006 0 0045 5.999v-2c4.411 0 7.999 3.588 7.999 7.999z"
                  fill="#669e4f"
                />
                <path
                  d="M29.192 7.757a6.005 6.005 0 00-8.485 0l-1.415-1.415c3.12-3.117 8.194-3.119 11.314 0z"
                  fill="#96cc7f"
                />
                <path d="M8 26a6 6 0 01-6-6v-2a6 6 0 016 6z" fill="#976947" />
                <path d="M8 26a6 6 0 006-6v-2a6 6 0 00-6 6z" fill="#c18e59" />
                <path d="M8 35a6 6 0 01-6-6v-2a6 6 0 016 6z" fill="#976947" />
                <path
                  d="M8 35a6 6 0 006-6v-2a6 6 0 00-6 6zM7.575 17c-2.099-2.209-2.099-5.791 0-8l2.851-3c2.099 2.209 2.099 5.791 0 8z"
                  fill="#c18e59"
                />
                <path d="M20 35h-4a4 4 0 014-4h4a4 4 0 01-4 4z" fill="#976947" />
                <path
                  d="M18 46a5.998 5.998 0 00-1.904 11.686 17.974 17.974 0 005.966-10.093A5.971 5.971 0 0018 46z"
                  fill="#f7d881"
                />
              </svg>
              <span>KETO</span>
            </div>
          )}
          {detail.vegan && (
            <div className="specialty">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <circle
                  cx="349.637"
                  cy="118.192"
                  fill="#c53232"
                  transform="rotate(-69.03 349.427 118.195)"
                  r="106.522"
                />
                <path
                  d="M349.637 174.359c-30.97 0-56.167-25.196-56.167-56.167s25.197-56.167 56.167-56.167c30.971 0 56.168 25.196 56.168 56.167s-25.197 56.167-56.168 56.167z"
                  fill="#dd4e4e"
                />
                <path
                  d="M210.022 134.604c-7.43-8.224-17.059-13.112-27.106-14.668-9.76-1.511-17.158-9.389-18.763-19.134a45.79 45.79 0 00-12.86-25.013c-12.664-12.664-30.87-16.4-46.808-11.215-8.471 2.756-17.856.098-23.699-6.626a46.605 46.605 0 00-2.227-2.388c-17.971-17.972-47.109-17.972-65.081 0s-17.971 47.109 0 65.081a46.605 46.605 0 002.388 2.227c6.723 5.843 9.382 15.229 6.626 23.699-5.185 15.938-1.449 34.144 11.215 46.808a45.797 45.797 0 0025.013 12.86c9.745 1.606 17.623 9.003 19.134 18.763 1.556 10.047 6.444 19.676 14.668 27.106 10.965 9.907 25.737 13.576 39.514 10.959 26.476-5.028 53.465-6.819 80.24-3.759l5.585.638-.638-5.585c-3.06-26.775-1.269-53.764 3.759-80.24 2.616-13.775-1.053-28.547-10.96-39.513z"
                  fill="#e1fd9f"
                />
                <path
                  d="M99.79 120.659l-10.606 10.606-10.607 10.607 137.154 137.154 10.606-10.607 10.607-10.606zM301.978 238.182c7.43-8.224 17.059-13.112 27.106-14.668 9.76-1.511 17.158-9.389 18.763-19.134a45.79 45.79 0 0112.86-25.013c12.664-12.664 30.87-16.4 46.808-11.215 8.471 2.756 17.856.098 23.699-6.626a46.605 46.605 0 012.227-2.388c17.971-17.972 47.109-17.972 65.081 0s17.971 47.109 0 65.081a46.605 46.605 0 01-2.388 2.227c-6.723 5.843-9.382 15.229-6.626 23.699 5.185 15.938 1.449 34.144-11.215 46.808a45.797 45.797 0 01-25.013 12.86c-9.745 1.606-17.623 9.003-19.134 18.763-1.556 10.047-6.444 19.676-14.668 27.106-10.965 9.907-25.737 13.576-39.514 10.959-26.476-5.028-53.465-6.819-80.24-3.759l-5.585.638.638-5.585c3.06-26.775 1.269-53.764-3.759-80.24-2.616-13.775 1.053-28.547 10.96-39.513z"
                  fill="#a5e887"
                />
                <path
                  d="M412.21 224.237l10.606 10.607 10.607 10.606-137.154 137.154-10.606-10.606-10.607-10.607z"
                  fill="#e1fd9f"
                />
                <g>
                  <circle
                    cx="121.866"
                    cy="307.369"
                    fill="#dd4e4e"
                    transform="rotate(-69.03 121.742 307.227)"
                    r="106.522"
                  />
                  <path
                    d="M121.865 363.536c-30.97 0-56.167-25.196-56.167-56.167s25.197-56.167 56.167-56.167c30.971 0 56.168 25.196 56.168 56.167s-25.197 56.167-56.168 56.167z"
                    fill="#e38651"
                  />
                  <g>
                    <path
                      d="M209.981 77.471c0 1.097.038 2.185.114 3.263.623 8.886-4.135 17.402-12.073 21.443-14.936 7.603-25.168 23.119-25.168 41.028a45.795 45.795 0 008.594 26.78c5.755 8.026 6.095 18.827.262 26.797-6.004 8.204-9.356 18.47-8.795 29.538.748 14.759 8.6 27.799 20.191 35.69 22.277 15.166 42.627 32.984 59.396 54.081l3.498 4.4 32.342-144.52L256 31.452c-25.416 0-46.019 20.603-46.019 46.019z"
                      fill="#a5e887"
                    />
                    <path
                      d="M330.552 169.985a45.795 45.795 0 008.594-26.78c0-17.909-10.232-33.425-25.168-41.028-7.938-4.041-12.695-12.557-12.073-21.443.076-1.078.114-2.166.114-3.263 0-25.416-20.603-46.019-46.019-46.019v289.04l3.498-4.4c16.769-21.097 37.119-38.914 59.396-54.081 11.592-7.892 19.443-20.931 20.191-35.69.561-11.069-2.791-21.335-8.795-29.538-5.833-7.971-5.494-18.772.262-26.798z"
                      fill="#00cc76"
                    />
                    <path d="M241 138.514v193.965h15l5.544-41.615L256 138.514z" fill="#e1fd9f" />
                    <path d="M256 138.514h15v193.965h-15z" fill="#a5e887" />
                    <path d="M0 327.411v69.707l278.95 36.159L256 327.411z" fill="#cde1e6" />
                    <path d="M256 327.411v105.866l256-36.159v-69.707z" fill="#b4d2d7" />
                  </g>
                </g>
                <path
                  d="M0 397.118v11.996c0 50.377 40.839 91.216 91.216 91.216H256l22.95-53.873L256 397.118z"
                  fill="#e1ebf0"
                />
                <path d="M256 397.118V500.33h164.784c50.377 0 91.216-40.839 91.216-91.216v-11.996z" fill="#cde1e6" />
              </svg>
              <span>VEGAN</span>
            </div>
          )}
        </div>
        <div className="dishType">
          <h3>Recommend for...</h3>
          {detail.dishTypes.map((dishType) => (
            <span key={dishType}>{dishType}</span>
          ))}
        </div>
        <div className="ingredientSection">
          <h3 className="header">Ingredients</h3>
          <div className="ingredients">
            {detail.extendedIngredients.map((ingredient) => (
              <div className="ingredient" key={ingredient.id}>
                <div className="image">
                  <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} />
                </div>
                <div className="name">{ingredient.name}</div>
                <div className="metric">
                  {ingredient.measures.us.amount}
                  {ingredient.measures.us.unitShort}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Equipments equip={equip} />
        <PriceBreakdown pb={pb} />
        <Instructions inst={inst} />
        <div className="summary" dangerouslySetInnerHTML={{ __html: detail.summary }}></div>
        <div className="winePairing"></div>
      </StyledTemplate>
    );
  return <div>데이터로딩실패</div>;
};

export default RecipeTemplate;
