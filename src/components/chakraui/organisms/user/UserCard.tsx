import React, { memo, ReactNode, VFC } from 'react';
import { Box, Stack, Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;

  return (
    <Box
      w="260px"
      height="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt="Profile Image"
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

export default UserCard;
