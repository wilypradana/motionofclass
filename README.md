## Project Structure

### Routes
```
app/api/courses/{slug} - API route for course data
app/courses/{slug} - Frontend route for course pages
```



### frontend
```
app/components/ui - dont change this folder!
```
 
## Getting Started

### Prerequisites
- BUN
- MongoDB

### Environment Setup

Create a `.env` file in the root of  project with the following variables:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
NEXT_PUBLIC_BASE_API_URL=http://localhost:3000/api
```

Make sure to replace:
- `<username>`: Your MongoDB username
- `<password>`: Your MongoDB password
- `<dbname>`: Your MongoDB database name

## Development

This project uses [Bun](https://bun.sh/) as the package manager for improved performance.

### Install dependencies
```bash
bun install
```

### Run development server
```bash
bun dev
```

## Production

### Build the application
```bash
bun run build
```

### Start the production server
```bash
bun run start
```


## Technologies Used

- Next.js
- MongoDB
- Bun


## License

[MIT](https://choosealicense.com/licenses/mit/)

