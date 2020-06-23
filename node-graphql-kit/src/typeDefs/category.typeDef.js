const typeDef = `
  extend type Query {
    categories: [Category]
  }

  extend type Mutation {
    createCategory(name: String!): Category
  }

  type Category {
    id: String
    name: String
    cats: [Cat]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default typeDef;
