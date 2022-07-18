import React, { FC } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: styles['btn-primary'],
  secondary: styles['btn-secondary'],
};

interface ButtonProps {
  value: string;
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
  value,
  variant = ButtonVariant.PRIMARY,
}: ButtonProps) => {
  return (
    <a className={`${buttonVariantClasses[variant]} ${styles.main}`} href="/">
      {value}
    </a>
  );
};
