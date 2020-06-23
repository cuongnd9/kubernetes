const typeDef = `
  type Query {
    cats(id: String): [Cat]
  }

  type Mutation {
    createCat(name: String!, color: String, categoryId: String!): Cat
  }

  type Cat {
    id: String
    name: String
    color: String
    categoryId: String
    category: Category
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

export default typeDef;
