import {
  combineReducers
} from "@reduxjs/toolkit";
import {
  createApi
} from "@reduxjs/toolkit/query/react";

const chatApi = createApi({
  reducerPath: "chatApi",
  endpoints: (build) => ({
    toggleChat: build.mutation({
      query: (data) => ({
        url: `/chat/${data.channelId}/toggle`,
        body: {
          freeze: data.freeze,
          image: data.image,
        },
        method: "PUT",
      }),
    }),
  }),
});

export const {
  useToggleChatMutation
} = chatApi;

export default combineReducers({
  [chatApi.reducerPath]: chatApi.reducer,
});