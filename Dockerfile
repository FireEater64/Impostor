# Build client
FROM mcr.microsoft.com/dotnet/sdk:5.0-alpine AS client-build
COPY . /build
WORKDIR /build/client
RUN dotnet publish -p:PublishSingleFile=true -p:PublishTrimmed=true --self-contained -r linux-musl-x64 -o /build/output/ client.csproj

# Build service
FROM node:lts-alpine
# Install deps and copy client
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT true
RUN apk add libintl
COPY --from=client-build /build/output/ /client
# Compile bot
COPY bot/ /bot
WORKDIR /bot
RUN yarn && ./node_modules/.bin/tsc

ENV AU_CLIENT_DIR=/client
ENV DATABASE_URL=postgresql://postgres:mysecretpassword@postgres:5432/postgres

ENTRYPOINT [ "node",  "dist/index.js"]