export default interface IApiNode<T extends string> {
  _id: string;
  __typename: T;
  createdAt: string;
}
