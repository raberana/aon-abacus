
SET IDENTITY_INSERT [dbo].[ReferentialLookups] ON 
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (2, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'CLIENTINDUSTRIES', N'CI1', N'CI1', NULL, N'Media and Communications')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (4, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'CLIENTINDUSTRIES', N'CI2', N'CI2', NULL, N'Engineering and Construction')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (5, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'CLIENTINDUSTRIES', N'CI3', N'CI3', NULL, N'Municipalities and Government')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (6, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'CLIENTINDUSTRIES', N'CI4', N'CI4', NULL, N'Financial Services')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (7, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BUSINESSLINES', N'BL1', N'BL1', NULL, N'Investment Banking')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (8, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BUSINESSLINES', N'BL2', N'BL2', NULL, N'Mergers & Acquisitions ')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (9, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BUSINESSLINES', N'BL3', N'BL3', NULL, N'Wealth Management')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (11, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BUSINESSLINES', N'BL4', N'BL4', NULL, N'Payment solutions')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (12, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'REMUNERATIONTYPES', N'FEE', N'FEE', NULL, N'Fee')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (14, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'REMUNERATIONTYPES', N'COMMISSION', N'COMMISSION', NULL, N'Commission')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (15, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BROKINGCENTERS', N'BC1', N'BC1', NULL, N'Singapore Money Brokers Association')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (16, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BROKINGCENTERS', N'BC2', N'BC2', NULL, N'Karvy Stock Broking Ltd')
GO
INSERT [dbo].[ReferentialLookups] ([Id], [CreatedDate], [ModifiedDate], [Category], [Code], [Value], [Description], [Label]) VALUES (17, CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'BROKINGCENTERS', N'BC3', N'BC3', NULL, N'Crédit Agricole Group')
GO
SET IDENTITY_INSERT [dbo].[ReferentialLookups] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 
GO
INSERT [dbo].[Users] ([Id], [UserId], [CreatedDate], [ModifiedDate], [Username], [Password], [Email], [FirstName], [LastName], [CompanyName], [IsLockedOut], [IsActive], [RequiresPasswordChange]) VALUES (2, N'0f8fad5b-d9cb-469f-a165-70867728950e', CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), CAST(N'2019-12-15T23:24:50.5570748+08:00' AS DateTimeOffset), N'john_doe', N'10001.L1lj2jKIBBOPE8747IbKLg==.N4TXEQe1X/71UHa6lwyWNd0dP3/Spk31SvIwZsvLDA8=', N'john.doe@aon.com', N'John', N'Doe', NULL, 0, 1, 0)
GO
SET IDENTITY_INSERT [dbo].[Users] OFF
GO