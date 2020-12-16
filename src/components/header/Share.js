import React from 'react';
import { RiMailFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';
import {
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import styled from 'styled-components';
import { color } from '../../styles';

const ShareTemplate = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  width: calc(100% - 144px);
  z-index: 10;
  background: #f6f8fc;
  button {
    width: 40px;
    height: 40px;
    border-radius: 14px;
    box-shadow: 2px 2px 3px #d8dade, -2px -2px 3px #ffffff;
    font-size: 22px;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 3px 3px 6px #d8dade, -3px -3px 6px #ffffff;
    }
    & + button {
      margin-left: 8px;
    }
    svg {
      font-size: 22px;
      color: #ffffff;
    }
  }
`;

const Share = ({ title }) => {
  return (
    <ShareTemplate>
      <EmailShareButton title={title} style={{ background: `linear-gradient(145deg, #F6F8FC, ${color.gray[4]})` }}>
        <RiMailFill />
      </EmailShareButton>
      <TwitterShareButton title={title} style={{ background: `linear-gradient(145deg, #F6F8FC, ${color.blue[3]})` }}>
        <RiTwitterFill />
      </TwitterShareButton>
      <TelegramShareButton title={title} style={{ background: `linear-gradient(145deg, #F6F8FC, ${color.indigo[3]})` }}>
        <FaTelegramPlane />
      </TelegramShareButton>
      <WhatsappShareButton title={title} style={{ background: `linear-gradient(145deg, #F6F8FC, ${color.green[3]})` }}>
        <RiWhatsappFill />
      </WhatsappShareButton>
    </ShareTemplate>
  );
};

export default Share;
