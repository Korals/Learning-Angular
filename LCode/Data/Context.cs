using LCode.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace LCode.Data
{
    public class Context : DbContext
    {
        public Context([NotNull] DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppUser> Users { get; set; }

    }
}
