import { memo, VFC } from 'react';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
  onOpen: () => void;
};

const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;

  return (
    <IconButton
      aria-label="Menu button"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});

export default MenuIconButton;
