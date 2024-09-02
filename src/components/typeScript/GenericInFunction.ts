export function getFirst(array: number[] | string[]) {
  return array[0];
}

export function getFirstWithGeneric<T>(array: T[]) {
  return array[0];
}

// const numbers = [1, 2, 3];

// const firstElement = getFirstWithGeneric(numbers);

// const strings = ["a", "b", "c"];

// const firstElementS = getFirstWithGeneric(strings);
// type Data = {
//   name: string;
//   age: number;
// };
type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

const response: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "Malik",
    age: 39,
  },
  isError: false,
};

const response2: ApiResponse<{ name: string; age: number; id: number }> = {
  data: {
    id: 22,
    name: "Malik",
    age: 39,
  },
  isError: false,
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type StatusResponse = ApiResponse<{ status: number }>;

const userResponse: UserResponse = {
  data: {
    name: "Malik",
    age: 39,
  },
  isError: false,
};

type BlogResponse = ApiResponse<{ title: string }>;

const blogResponse: BlogResponse = {
  data: {
    title: "Malik",
  },
  isError: false,
};

type UserApiResponse<Data = { status: number }> = {
  data: Data;
  isError: boolean;
};

const userResponse2: UserApiResponse = {
  data: {
    status: 200,
  },
  isError: false,
};
