// noImplicitAny
export function greet(name: string) {
  return `Hello, ${name}`;
}

// noUnusedParameters
export function say(message: string) {
  console.log(message);
}

// noImplicitReturns
export function computeScore(score: number): number {
  if (score > 60) {
    return score;
  }
  return 0;
}

// exactOptionalPropertyTypes
export type MyUser = {
  name: string;
  age?: number;
};

export const user: MyUser = {
  name: 'myku',
  age: 18,
};
