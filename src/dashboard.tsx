import { MantineProvider } from "@mantine/core";                                                
import React from "react";                                                                      
import ReactDOM from "react-dom/client";                                                        
import Options from "./Options";                                                                        
                                                                           
                                                                                                    
ReactDOM.createRoot(document.getElementById("options") as HTMLElement).render(                     
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{                                   
	    fontFamily: 'Inter',                                                            
	    colorScheme: 'dark',
      headings: { fontFamily: 'Inter Black'},
      primaryColor: 'orange',
                                                                          
	                                                                                                   
                                                                                                   
     }}                                                                                            
   >                                                                                              
    <Options/>                                                                                   
 </MantineProvider>                                                                            
);   
