USE [Abacus]
GO

/****** Object:  Table [dbo].[ReferentialLookups]    Script Date: 12/20/2019 6:17:32 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ReferentialLookups](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[CreatedDate] [datetimeoffset](7) NOT NULL,
	[ModifiedDate] [datetimeoffset](7) NULL,
	[Category] [nvarchar](100) NOT NULL,
	[Code] [nvarchar](100) NOT NULL,
	[Value] [nvarchar](max) NULL,
	[Description] [nvarchar](300) NULL,
	[Label] [nvarchar](500) NULL,
 CONSTRAINT [PK_ReferentialLookups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [IX_UniqueCategoryCode] UNIQUE NONCLUSTERED 
(
	[Category] ASC,
	[Code] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


