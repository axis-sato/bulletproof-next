import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import Button from "@/components/Elements/Button/Button";
import GithubIcon from "@/components/Icon/GithubIcon";
import HomeIcon from "@/components/Icon/HomeIcon";
import Lyout from "@/features/getStarted/components/Lyout";
import { pagesPath } from "@/lib/$path";

const Home: NextPage = () => {
  const router = useRouter();
  const handleStart = () => router.push(pagesPath.auth.login.$url());

  return (
    <Lyout
      headingMessage="Bulletproof Next"
      message="Showcasing Best Practices For Building Next.js Applications"
      getStartedButton={
        <Button
          leftIcon={<HomeIcon />}
          colorScheme="teal"
          onClick={handleStart}
        >
          Get Started
        </Button>
      }
      githubRepoButton={
        <Button leftIcon={<GithubIcon />} colorScheme="teal" variant="outline">
          Github Repo
        </Button>
      }
    />
  );
};

export default Home;
