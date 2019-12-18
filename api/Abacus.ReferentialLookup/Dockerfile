#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Abacus.ReferentialLookup/Abacus.ReferentialLookup.csproj", "Abacus.ReferentialLookup/"]
RUN dotnet restore "Abacus.ReferentialLookup/Abacus.ReferentialLookup.csproj"
COPY . .
WORKDIR "/src/Abacus.ReferentialLookup"
RUN dotnet build "Abacus.ReferentialLookup.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Abacus.ReferentialLookup.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Abacus.ReferentialLookup.dll"]