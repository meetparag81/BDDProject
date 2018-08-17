package StepDefinations;

import com_FB_Base.TestBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import com_FB_Pages.LoginPage;
import com_FB_Pages.HomePage;
public class StepDefination extends TestBase 
{
	LoginPage LoginPage;
	HomePage HomePage;
	// small changes are done	
	
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() 
	{
		TestBase.initalization();
	}

	@When("^Login page Title is CRM$")
	public void login_page_Title_is_CRM() 
	{
		LoginPage = new LoginPage();
		String Actual= LoginPage.validateloginpagetitle();
		String Expected= "#1 Free CRM software in the cloud for sales and service";
	 Assert.assertEquals(Expected, Actual);
	}
	    

	@Then("^userisonHomePage\"([^\"]*)\" and \"([^\"]*)\"$")
	public void userisonHomePageTest(String un, String psw)  
	{
		HomePage = LoginPage.LogintoFB(un, psw);
		   String Actual= LoginPage.validateloginpagetitle();
		   String expected = "CRMPRO";
		   System.out.println("userisonHomePageTest is completed");
	}
	   

	@Then("^user close the browser$")
	public void user_close_the_browser() 
	{
		 driver.quit();      
	}

	
	

}
