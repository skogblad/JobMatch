import {
  DigiLinkInternal,
  DigiNotificationErrorPage,
} from "@digi/arbetsformedlingen-react";
import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen";
import { useState, useEffect } from "react";
import { useRouteError } from "react-router";

export const Error = () => {
  const error = useRouteError();
  const [statusCode, setStatusCode] = useState(ErrorPageStatusCodes.NOT_FOUND);

  useEffect(() => {
    const e = error as { status?: number };
    if (e?.status) {
      switch (e.status) {
        case 401:
          setStatusCode(ErrorPageStatusCodes.UNAUTHORIZED);
          break;
        case 403:
          setStatusCode(ErrorPageStatusCodes.FORBIDDEN);
          break;
        case 404:
          setStatusCode(ErrorPageStatusCodes.NOT_FOUND);
          break;
        case 500:
          setStatusCode(ErrorPageStatusCodes.INTERNAL_SERVER_ERRROR);
          break;
        case 503:
          setStatusCode(ErrorPageStatusCodes.SERVICE_UNAVAILABLE);
          break;
        case 504:
          setStatusCode(ErrorPageStatusCodes.GATEWAY_TIMEOUT);
          break;
        default:
          setStatusCode(ErrorPageStatusCodes.INTERNAL_SERVER_ERRROR);
      }
    }
  }, [error]);

  return (
    <DigiNotificationErrorPage afHttpStatusCode={statusCode}>
      <ul slot="links">
        <li>
          <DigiLinkInternal afHref="/" afVariation="small">
            Till startsidan
          </DigiLinkInternal>
        </li>
      </ul>
    </DigiNotificationErrorPage>
  );
};
