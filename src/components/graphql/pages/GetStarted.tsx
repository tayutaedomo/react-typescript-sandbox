import React, { useEffect, VFC } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from '@apollo/client';
import { Box, Heading, Link } from '@chakra-ui/react';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function ExchangeRates() {
  const EXCHANGE_RATES = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

const GetStarted: VFC = () => {
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetRates {
            rates(currency: "USD") {
              currency
            }
          }
        `,
      })
      .then((result) => console.log(result));
  }, []);

  return (
    <ApolloProvider client={client}>
      <Box>
        <Heading as="h2" size="lg">
          Get Started
        </Heading>
      </Box>
      <Box>
        <Heading as="h3" size="sm">
          <Link
            href="https://www.apollographql.com/docs/react/get-started/"
            isExternal={true}
            color="blue.500"
          >
            Reference
          </Link>
        </Heading>
      </Box>
      <Box>
        <ExchangeRates />
      </Box>
    </ApolloProvider>
  );
};

export default GetStarted;
