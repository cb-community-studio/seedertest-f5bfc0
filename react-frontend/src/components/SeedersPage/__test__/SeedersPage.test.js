import React from "react";
import { render, screen } from "@testing-library/react";

import SeedersPage from "../SeedersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders seeders page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SeedersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("seeders-datatable")).toBeInTheDocument();
    expect(screen.getByRole("seeders-add-button")).toBeInTheDocument();
});
