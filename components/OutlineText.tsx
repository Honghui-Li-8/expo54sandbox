import { StrokeText } from "@charmy.tech/react-native-stroke-text";
import React, { FC } from "react";

interface OutlinedTextProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  strokeWidth?: number;
  strokeColor: string;
  fillColor: string;
}

export const OutlinedText: FC<OutlinedTextProps> = ({
  text,
  fontSize = 16,
  fontFamily,
  strokeWidth = 1,
  strokeColor,
  fillColor,
}) => {
  return (
    <StrokeText
      text={text.toUpperCase()}
      fontFamily={fontFamily}
      fontSize={fontSize}
      strokeColor={strokeColor}
      color={fillColor}
      strokeWidth={strokeWidth}
    />
  );
};
