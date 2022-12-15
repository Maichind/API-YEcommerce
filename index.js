import app from './app.js'
import {connectDB} from './utils/mongoose.js'

async function main(){
  await connectDB();

  app.listen(3000, () => {
    console.log('server started');
  });
}

main();

