import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameCard } from '.';

export default {
  title: 'GameCard',
  component: GameCard,
} as ComponentMeta<typeof GameCard>;

export const Primary: ComponentStory<typeof GameCard> = args => (
  <GameCard
    href="https://diabloimmortal.blizzard.com/en-us/"
    logo="url(https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt337ca2914b0db3a6/6287d00854eada112e74b40b/diablo-immortal-logo.png?format=webply&quality=80&auto=webp)"
    imgSrc="url(https://blz-contentstack-images.akamaized.net/v3/assets/blta8f9a8e092360c6c/blt79043aa5fa534642/6287cffece252c6143a0d875/diablo-immortal-square.jpg?format=webply&quality=80&auto=webp)"
    vidSrc="url(https://blz-contentstack-assets.akamaized.net/v3/assets/blta8f9a8e092360c6c/blta5ac25cab65c96c6/628d584389d6fd3d32ce668b/Tile_Anim_Diablo_Immortal_Rect.mp4)"
    title="Diablo Immortal"
    genre="ACTION RPG"
    bNet={true}
    playStore={true}
    appStore={true}
    newLabel={true}
  />
);

// export const Secondary: ComponentStory<typeof GameCard> = args => (
//   <GameCard variant={GameCardVariant.SECONDARY}></GameCard>
// );
