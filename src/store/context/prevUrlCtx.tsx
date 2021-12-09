import { useRouter } from "next/router";
import { createContext, useState, useCallback, useEffect } from "react";

type contextProps = {
  prevUrl: string;
};

export const PrevUrlCtx = createContext<contextProps>({
  prevUrl: "",
});

export const PrevUrlCtxProvider: React.FC = (props) => {
  const router = useRouter();
  const [prevUrl, setPrevUrl] = useState("");
  const hoverHandler = useCallback((): void => {
    setPrevUrl(router.asPath);
  }, [setPrevUrl]);

  useEffect(() => {
    router.events.on("beforeHistoryChange", hoverHandler);
    return () => {
      router.events.off("beforeHistoryChange", hoverHandler);
    };
  }, []);
  
  const context: contextProps = {
    prevUrl: prevUrl,
  };
  return (
    <PrevUrlCtx.Provider value={context}>{props.children}</PrevUrlCtx.Provider>
  );
};
