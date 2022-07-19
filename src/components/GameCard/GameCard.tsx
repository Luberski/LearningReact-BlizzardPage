import React, { useState, useEffect, useMemo } from 'react';
import styles from './styles.module.css';
import bNetImg from '/public/BattleNet.svg';
import playStationImg from '/public/PlayStation.svg';
import xboxImg from '/public/Xbox.svg';
import playStoreImg from '/public/PlayStore.svg';
import appStoreImg from '/public/AppStore.svg';
import nSwitchImg from '/public/NintendoSwitch.svg';

export enum GameCardSize {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const GameCardSizeClasses: Record<GameCardSize, string> = {
  primary: styles.primarySize,
  secondary: styles.secondarySize,
};

export type GameCardProps = {
  sizeVariant?: GameCardSize;
  href: string;
  logo: string;
  imgSrc: string;
  vidSrc: string;
  title: string;
  genre: string;
  bNet?: boolean;
  playStore?: boolean;
  appStore?: boolean;
  pStation?: boolean;
  nSwitch?: boolean;
  xbox?: boolean;
  newLabel?: boolean;
};

export const GameCard = ({
  sizeVariant = GameCardSize.PRIMARY,
  href,
  logo,
  imgSrc,
  vidSrc,
  title,
  genre,
  bNet = false,
  playStore = false,
  appStore = false,
  pStation = false,
  nSwitch = false,
  xbox = false,
  newLabel = false,
}: GameCardProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const vid = document.getElementsByTagName('video')[0];

    if (isActive) {
      vid.load();
      let playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(_=>_)
          .catch(_=>_);
      }
    } else {
      vid.pause();
    }
  }, [isActive]);

  return (
    <a
      onMouseLeave={() => setIsActive(false)}
      onMouseEnter={() => setIsActive(true)}
      href={href}
      className={styles.main}
    >
      <div className={`${styles.tile} ${GameCardSizeClasses[sizeVariant]}`}>
        <video loop muted>
          <source
            src="https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt61a293be4179fff3/628d38155c838e3e5a186b2f/Tile_Anim_Diablo_Immortal_Rect.webm"
            type="video/webm"
          ></source>
          <source
            src="https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blta5ac25cab65c96c6/628d584389d6fd3d32ce668b/Tile_Anim_Diablo_Immortal_Rect.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className={styles.gameImg}>
          {newLabel && <div className={styles.callout}>new</div>}
        </div>
        <div className={styles.gameLogo}></div>
      </div>

      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
        <span>
          {bNet && <img src={bNetImg} alt="Battle.net" />}
          {pStation && <img src={playStationImg} alt="Play Station" />}
          {nSwitch && <img src={nSwitchImg} alt="Nintendo Switch" />}
          {xbox && <img src={xboxImg} alt="Xbox" />}
          {appStore && <img src={appStoreImg} alt="App Store" />}
          {playStore && <img src={playStoreImg} alt="Play Store" />}
        </span>
      </div>
    </a>
  );
};
