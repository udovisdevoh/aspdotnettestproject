Tech
{
	C#
	{
		Apprendre WCF
		{
			http://msdn.microsoft.com/en-us/library/ms734712%28v=vs.110%29.aspx
			http://msdn.microsoft.com/en-us/library/dd936243.aspx
			http://msdn.microsoft.com/en-us/library/ms731067.aspx
			http://msdn.microsoft.com/en-us/library/dd456779.aspx
			https://www.youtube.com/watch?v=1o_1trg2R04&index=2&list=WL
			http://www.codeproject.com/Articles/406096/A-beginners-tutorial-for-understanding-Windows
		}
		
		Apprendre Asp.net
		{	
			MVC
			{
				http://www.asp.net/mvc/tutorials/mvc-5/introduction/getting-started
				-> http://www.asp.net/mvc/tutorials/getting-started-with-ef-using-mvc/sorting-filtering-and-paging-with-the-entity-framework-in-an-asp-net-mvc-application
				http://azure.microsoft.com/en-us/documentation/articles/web-sites-dotnet-deploy-aspnet-mvc-app-membership-oauth-sql-database/?rnd=1
				http://www.asp.net/aspnet/overview/developing-apps-with-windows-azure
				
				Faire site multilingue
				{
					http://msdn.microsoft.com/en-us/library/c6zyy3s9.aspx
					http://www.c-sharpcorner.com/uploadfile/ankithakur/globalization_localization_in_dotnet_csharp07032006023510am/globalization_localization_in_dotnet_csharp.aspx
					http://www.mikesdotnetting.com/Article/183/Globalization-And-Localization-With-Razor-Web-Pages
					
					Fairly local
					{
						http://www.fairtutor.com/fairlylocal/
					}
				}
			
				Apprendre à utiliser mot de passe encrypté / apprendre à utiliser authentification par default
				
				Apprendre gestion de droits
				
				Validations: faire des messages d'erreur custom
				
				DB
				{									
					Collations
					{
						Checker réponse à mon commentaire sur
						{
							http://www.asp.net/mvc/tutorials/mvc-5/introduction/adding-search
						}
					}
				}
				
				custom code generation
				{
					http://www.hanselman.com/blog/ModifyingTheDefaultCodeGenerationscaffoldingTemplatesInASPNETMVC.aspx
				}
			}

			.NET scaffolding model (from DB to model)
			{
				http://www.asp.net/visual-studio/overview/2013/aspnet-scaffolding-overview
			}
		}
	}
}

HowTo
{
	PLINQ
	{
		http://www.codeguru.com/csharp/csharp/cs_linq/article.php/c19975/A-Beginners-Guide-to-PLINQ.htm
		http://www.csharphelp.com/2011/01/plinq-tutorial/ //forAll()
	}
	
	Parallel foreach
	{
		http://stackoverflow.com/questions/3789998/parallel-foreach-vs-foreachienumerablet-asparallel
	}
	
	Localization
	{
		http://www.codeproject.com/Articles/262917/i-n-globalization-with-gettext-and-asp-net-mvc
	
		Fairly local
		{
			http://www.fairtutor.com/fairlylocal/
		}
	}
	
	custom code generation
	{
		http://www.hanselman.com/blog/ModifyingTheDefaultCodeGenerationscaffoldingTemplatesInASPNETMVC.aspx
	}
	
	C++
	{
		http://www.bobtacoindustries.com/Content/Devs/CsToCpp-ASomewhatShortGuide.pdf
	}
	
	Perl
	{
		http://www.learnperl.org/
	}
	
	DB
	{
		Index
		{
			http://www.c-sharpcorner.com/uploadfile/b19d5a/index-in-sql-server-2008/
			
			http://forums.asp.net/p/2011016/5784082.aspx?Re+SQL+Server+Express+Create+indexes+unique+normal+index+etc
		}
		
		Collations
		{		
			Setter une collation
			{
				You can do so in design view (select column, in column properties pane) or run sql statements; something like

				ALTER TABLE table-name
				ALTER COLUMN col1 varchar(10) COLLATE SQL_Latin1_General_CP1_CI_AS
			}
		
			Liste de collations
			{
				http://msdn.microsoft.com/en-us/library/ms144250(v=sql.105).aspx
			}
		}
	}
}