import { memo, VFC } from 'react';
import { Button } from '@chakra-ui/button';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Divider } from '@chakra-ui/layout';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUsers: () => void;
  onClickSetting: () => void;
  onClickLogout: () => void;
};

const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickSetting,
    onClickUsers,
    onClickLogout,
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome}>
              Top
            </Button>
            <Button w="100%" onClick={onClickUsers}>
              Users
            </Button>
            <Button w="100%" onClick={onClickSetting}>
              Setting
            </Button>
            <Divider />
            <Button w="100%" onClick={onClickLogout}>
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

export default MenuDrawer;
