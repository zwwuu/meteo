export enum Direction {
  NORTH = "N",
  NORTH_EAST = "NE",
  EAST = "E",
  SOUTH_EAST = "SE",
  SOUTH = "S",
  SOUTH_WEST = "SW",
  WEST = "W",
  NORTH_WEST = "NW",
}

export function getDirection(degree: number): Direction {
  if (degree > 337.5) return Direction.NORTH;
  if (degree > 292.5) return Direction.NORTH_WEST;
  if (degree > 247.5) return Direction.WEST;
  if (degree > 202.5) return Direction.SOUTH_WEST;
  if (degree > 157.5) return Direction.SOUTH;
  if (degree > 122.5) return Direction.SOUTH_EAST;
  if (degree > 67.5) return Direction.EAST;
  if (degree > 22.5) return Direction.NORTH_EAST;
  return Direction.NORTH;
}
