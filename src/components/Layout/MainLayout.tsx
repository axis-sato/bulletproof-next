import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Text,
  Flex,
  IconButton,
  useBreakpointValue,
  useBoolean,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { ReactElement, ReactNode } from "react";
import {
  FiAlignJustify,
  FiHome,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";

import { APP_NAME } from "@/constants/appName";

type HeaderProps = {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
};

const Header = ({ showSidebarButton = true, onShowSidebar }: HeaderProps) => {
  return (
    <Flex bg="white" p={4} shadow="md" justifyContent="center">
      <Box flex="1">
        {showSidebarButton && (
          <IconButton
            aria-label="open side drawer"
            icon={<FiAlignJustify />}
            colorScheme="blackAlpha"
            onClick={onShowSidebar}
          />
        )}
      </Box>
      <Box flex="1" />
    </Flex>
  );
};

const SIDEBAR_W = "250px";

type SidebarProps = {
  onClose: () => void;
  isOpen: boolean;
  variant: "drawer" | "sidebar";
};

const SidebarButton = ({
  onClick,
  children,
  icon,
}: {
  onClick: () => void;
  children: ReactNode;
  icon: ReactElement;
}) => {
  return (
    <Button
      as="a"
      cursor="pointer"
      bg="gray.800"
      _hover={{ bg: "gray.700" }}
      color="gray.300"
      onClick={onClick}
      w="100%"
      justifyContent="start"
      leftIcon={icon}
    >
      {children}
    </Button>
  );
};

const SidebarContent = ({ onClick }: { onClick: () => void }) => (
  <VStack>
    <SidebarButton onClick={onClick} icon={<FiHome />}>
      Home
    </SidebarButton>
    <SidebarButton onClick={onClick} icon={<FiMessageSquare />}>
      About
    </SidebarButton>
    <SidebarButton onClick={onClick} icon={<FiUsers />}>
      Contact
    </SidebarButton>
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }: SidebarProps) => {
  return variant === "sidebar" ? (
    <>
      <Box position="fixed" left={0} w={SIDEBAR_W} top={0} h="100%">
        <Center py={5} bg="gray.900" w="100%">
          <Text
            justifyContent="center"
            color="gray.300"
            fontWeight="bold"
            fontSize="xl"
          >
            {APP_NAME}
          </Text>
        </Center>
        <Box p={5} w={SIDEBAR_W} h="100%" bg="gray.800">
          <SidebarContent onClick={onClose} />
        </Box>
      </Box>
    </>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

type MainLayoutProps = { children: ReactNode; title?: string };

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const [isSidebarOpen, { toggle: toggleSidebar }] = useBoolean();

  const smVariant = { navigation: "drawer" as const, navigationButton: true };
  const mdVariant = { navigation: "sidebar" as const, navigationButton: false };
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  return (
    <>
      <Head>
        <title>
          {APP_NAME}
          {title ? `-${title}` : null}
        </title>
      </Head>

      <Sidebar
        variant={variants?.navigation ?? mdVariant.navigation}
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <Box ml={variants?.navigation === "sidebar" ? SIDEBAR_W : 0}>
        <Header
          showSidebarButton={variants?.navigationButton}
          onShowSidebar={toggleSidebar}
        />
      </Box>

      <Box ml={variants?.navigation === "sidebar" ? SIDEBAR_W : 0}>
        {children}
      </Box>
    </>
  );
};

export default MainLayout;
