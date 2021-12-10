import type { NextPage } from "next";
import React from "react";

import Button from "@/components/Button/Button";
import GithubIcon from "@/components/Icon/GithubIcon";
import HomeIcon from "@/components/Icon/HomeIcon";
import TopPageLyout from "@/components/Layout/TopPageLyout";

const Home: NextPage = () => {
  return (
    <TopPageLyout
      headingMessage="Bulletproof Next"
      message="Showcasing Best Practices For Building Next.js Applications"
      getStartedButton={
        <Button leftIcon={<HomeIcon />} colorScheme="teal">
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
