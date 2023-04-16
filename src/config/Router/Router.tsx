import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import Layout from "../../common/Layout/Layout";
import { ROUTES } from "./routes";

const AboutPage = React.lazy(
  () => import("../../pages/Public/AboutPage/AboutPage")
);

const FilmsPage = React.lazy(
  () => import("../../pages/Public/FilmsPage/FilmsPage")
);

export const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loader isLoading isFullScreen />}>
        <Layout>
          <Routes>
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />

            <Route path={ROUTES.FILMS} element={<FilmsPage />} />

            <Route path="*" element={<Navigate to={ROUTES.ABOUT} />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
