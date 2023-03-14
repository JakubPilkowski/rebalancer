export default interface IApiNode<T extends string> {
  id: string;
  __typename: T;
  createdAt: string;
  updatedAt: string;
}
