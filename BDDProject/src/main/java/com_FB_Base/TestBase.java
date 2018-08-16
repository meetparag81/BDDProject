package com_FB_Base;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com_FB_Util.TestUtil;

public class TestBase 
{
	public static WebDriver driver;
	  public static Properties prop;
	 
	    public TestBase() 
	    {
	    	try 
				{
					 prop = new Properties();
					 FileInputStream ip = new FileInputStream("C:\\Parag\\PrjectIVF\\BDDProject\\src\\main\\java\\com_FB_Config\\config.properties");
					prop.load(ip);
				} 
	    	catch (Exception e) 
	    	{
					System.out.println("Exception is seen");
	    	}
		}
	    
	  
	  public static void initalization()
	  {
		  String browser=prop.getProperty("browser");
			 if(browser.equals("firefox"))
			 {
				 System.setProperty("webdriver.gecko.driver","G:\\Javaprogramming\\Selenium\\Selenium Setup\\geckodriver.exe");
					driver = new FirefoxDriver(); 
			 }		 
			 else if(browser.equals("chrome"))
			 {
				 System.setProperty("webdriver.chrome.driver" ,"C:\\Parag\\Selenium\\Selenium Setup\\chrome exe for 65\\chromedriver.exe");
					driver = new ChromeDriver(); 
			 }
			 System.out.println("Browserlaunched");
			
			//driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
			driver.get(prop.getProperty("url"));
			
			
		  

}
}
