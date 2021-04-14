import { memo, VFC } from 'react';
import { Button } from '@chakra-ui/button';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MenuDrawer: VFC<Props> = memo((props) => {
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">Top</Button>
            <Button w="100%">Users</Button>
            <Button w="100%">Setting</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
