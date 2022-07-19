import React from 'react';
import styles from './styles.module.css';

export enum TestComponentVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export type TestComponentProps = {
  value: string;
  variant?: TestComponentVariant;
};

export const TestComponent = ({ value, variant }: TestComponentProps) => {
  let styling = {};

  switch (variant) {
    case TestComponentVariant.PRIMARY:
      styling = {
        backgroundImage: 'linear-gradient(180deg, #1888ef 0%, #009fe9 100%)',
      };
      break;
    case TestComponentVariant.SECONDARY:
      styling = {
        backgroundColor: 'rgb(23, 23, 23, 0.2)',
      };
      break;
  }

  return (
    <a style={styling} className={styles.main} href="/">
      {value}
    </a>
  );
};
