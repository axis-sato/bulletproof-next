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
  Spacer,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, ReactNode } from "react";
import {
  FiAlignJustify,
  FiHome,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import { APP_NAME } from "@/constants/appName";
import { pagesPath } from "@/lib/$path";

const UserNavigation = () => {
  const router = useRouter();
  const userNavigation = [
    {
      name: "Your Profile",
      onClick: () => router.push(pagesPath.app.profile.$url()),
    },
    {
      name: "Log out",
      onClick: () => console.log("ログアウト"),
    },
  ];
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        boxSize={"45px"}
        fontSize={"30px"}
        aria-label="Options"
        icon={<FiUser />}
        rounded={50}
        bg="gray.100"
      />
      <MenuList>
        {userNavigation.map((nav) => (
          <MenuItem key={nav.name} onClick={nav.onClick}>
            {nav.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

type HeaderProps = {
  onShowSidebar: () => void;
  showSidebarButton?: boolean;
};

const Header = ({ showSidebarButton = true, onShowSidebar }: HeaderProps) => {
  return (
    <Flex bg="white" px={4} py={2} shadow="md" justifyContent="center">
      {showSidebarButton && (
        <IconButton
          aria-label="open side drawer"
          icon={<FiAlignJustify />}
          colorScheme="blackAlpha"
          onClick={onShowSidebar}
        />
      )}
      <Spacer />
      <UserNavigation />
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
  isActive,
}: {
  onClick: () => void;
  children: ReactNode;
  icon: ReactElement;
  isActive: boolean;
}) => {
  return (
    <Button
      as="a"
      cursor="pointer"
      bg={clsx({ "gray.900": isActive, "gray.800": !isActive })}
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

const SidebarContent = ({ onClick }: { onClick: () => void }) => {
  const router = useRouter();
  const navigation = [
    { name: "Dashboard", to: pagesPath.app.$url(), icon: <FiHome /> },
    {
      name: "Discussions",
      to: pagesPath.app.discussions.$url(),
      icon: <FiMessageSquare />,
    },
    { name: "Users", to: pagesPath.app.users.$url(), icon: <FiUsers /> },
  ];
  return (
    <VStack>
      {navigation.map((item) => (
        <Link key={item.name} href={item.to} passHref>
          <SidebarButton
            isActive={router.pathname === item.to.pathname}
            onClick={onClick}
            icon={item.icon}
          >
            {item.name}
          </SidebarButton>
        </Link>
      ))}
    </VStack>
  );
};

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
    <Box bg="gray.100" h="100vh">
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
    </Box>
  );
};

export default MainLayout;
