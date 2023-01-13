import { Direction, getDirection } from "../../lib/types/direction";
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
} from "@tabler/icons";
import React from "react";

type DirectionIconProp = {
  degree: number;
};

export default function DirectionIcon({ degree }: DirectionIconProp) {
  const mapToIcon = (degree: number) => {
    const direction = getDirection(degree);
    switch (direction) {
      case Direction.NORTH:
        return <IconArrowUp />;
      case Direction.NORTH_WEST:
        return <IconArrowUpRight />;
      case Direction.WEST:
        return <IconArrowRight />;
      case Direction.SOUTH_WEST:
        return <IconArrowDownRight />;
      case Direction.SOUTH:
        return <IconArrowDown />;
      case Direction.SOUTH_EAST:
        return <IconArrowDownLeft />;
      case Direction.EAST:
        return <IconArrowRight />;
      case Direction.NORTH_EAST:
        return <IconArrowUpLeft />;
    }
  };

  return mapToIcon(degree);
}
