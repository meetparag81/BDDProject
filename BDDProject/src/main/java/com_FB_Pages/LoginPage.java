package com_FB_Pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com_FB_Base.TestBase;
import com_FB_Util.TestUtil;

public class LoginPage extends TestBase 
{
@FindBy(xpath="//input[@name='username']") WebElement username;
@FindBy(xpath="//input[@name='password']")WebElement password;
@FindBy(xpath="//input[@class='btn btn-small']")WebElement login_button;
private JavascriptExecutor js;
	
	public LoginPage()
	{
		PageFactory.initElements(driver, this);
	}
	
	
	
	
	public String validateloginpagetitle()
	{
		return driver.getTitle();
		
	}
	
	public  HomePage LogintoFB(String un,String psw) 
	{
		username.sendKeys(un);
		password.sendKeys(psw);
		try
		{
		TestUtil.VisibleOn(driver, login_button, 50);
		TestUtil.ActionForMovetoElement(login_button);
		}
		catch(Exception e)
		{
			System.out.println("Element- login_button is not seen with in 30 sec");
		}
		login_button.click();
		
		return  new HomePage(); 
	
	
}
}
