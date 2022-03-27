import { AppShell, Container, Header, Title } from "@mantine/core";
import Link from "next/link";

export const Layout = ({ title, children }) => {
  return (
    <>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        header={
          <Header height={70} p="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Title>
                <Link href={`/`}>
                  <a>{title}</a>
                </Link>
              </Title>
            </div>
          </Header>
        }
      >
        <Container>{children}</Container>
      </AppShell>
    </>
  );
};
