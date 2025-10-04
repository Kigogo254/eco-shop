
import ImageUpload from "../components/ImageUpload";
import { EdgeStoreProvider } from "../lib/edgestore";



export default function Home() {
  return (
     <div>
      <EdgeStoreProvider>
          <ImageUpload />    
      </EdgeStoreProvider>
 
      </div>
  );
}
