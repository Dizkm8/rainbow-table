# Rainbow Table
This is a little small version of a rainbow table, my goal was not improve performance, but achieve my own version.

It's powered with .NET 8 and React. Because of DB size it could not be added to the repo, but I upload to Google Drive. I used [rockyou](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt) as password data source and python to hash each and load to a custom SQLite DB.

**Note**: If you want, you could create the DB from scratch using python and rockyou.txt, anyways, the hashing algorithms used are a little bit expensive, so it will take several hours to complete.

# Clone and Run

## Requeriments

- SDK [.NET 8](https://dotnet.microsoft.com/es-es/download/dotnet/8.0).
- git [2.33.0](https://git-scm.com/downloads) o superior.
- Node [20.12.x](https://nodejs.org/en/blog/release/v20.12.1)

## Installation

1. Clone
```bash
git clone https://github.com/Dizkm8/rainbow-table
cd rainbow-table
```

2. Install and run API
```bash
cd API
dotnet restore
dotnet run
```

3. Install and run Client
```bash
# Create a new terminal at project root
cd client
npm i
npm run dev
```

## Use

Go to the following URL in your browser: http://localhost:5173 and you will see the client.

Also you could use the API directly using Swagger UI, it's running on http://localhost:5233/swagger .