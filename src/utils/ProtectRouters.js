import { useEffect } from "react";
import { useRouter } from "next/navigation";

function withAuth(Component, allowedRoles = []) {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (
        !user ||
        (allowedRoles.length > 0 && !allowedRoles.includes(user.role))
      ) {
        router.push("/auth/signin");
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, allowedRoles]);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
}

export default withAuth;
